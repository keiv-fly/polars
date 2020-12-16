use crate::prelude::*;
use crate::utils::get_supertype;
use rayon::prelude::*;
use std::ops::{Add, Div, Mul, Rem, Sub};

/// Get the supertype that is valid for all columns in the DataFrame.
/// This reduces casting of the rhs in arithmetic.
fn get_supertype_all(df: &DataFrame, rhs: &dyn SeriesTrait) -> Result<ArrowDataType> {
    df.columns
        .iter()
        .fold(Ok(rhs.dtype().clone()), |dt, s| match dt {
            Ok(dt) => get_supertype(s.dtype(), &dt),
            e => e,
        })
}

macro_rules! impl_arithmetic {
    ($self:expr, $rhs:expr, $operand: tt) => {{
        let st = get_supertype_all($self, $rhs)?;
        let rhs = $rhs.cast_with_arrow_datatype(&st)?;
        let cols = $self.columns.par_iter().map(|s| {
            Ok(&*s.cast_with_arrow_datatype(&st)? $operand &*rhs)
        }).collect::<Result<_>>()?;
        Ok(DataFrame::new_no_checks(cols))
    }}
}

impl Add<&dyn SeriesTrait> for &DataFrame {
    type Output = Result<DataFrame>;

    fn add(self, rhs: &dyn SeriesTrait) -> Self::Output {
        impl_arithmetic!(self, rhs, +)
    }
}

impl Add<&dyn SeriesTrait> for DataFrame {
    type Output = Result<DataFrame>;

    fn add(self, rhs: &dyn SeriesTrait) -> Self::Output {
        (&self).add(rhs)
    }
}

impl Sub<&dyn SeriesTrait> for &DataFrame {
    type Output = Result<DataFrame>;

    fn sub(self, rhs: &dyn SeriesTrait) -> Self::Output {
        impl_arithmetic!(self, rhs, -)
    }
}

impl Sub<&dyn SeriesTrait> for DataFrame {
    type Output = Result<DataFrame>;

    fn sub(self, rhs: &dyn SeriesTrait) -> Self::Output {
        (&self).sub(rhs)
    }
}

impl Mul<&dyn SeriesTrait> for &DataFrame {
    type Output = Result<DataFrame>;

    fn mul(self, rhs: &dyn SeriesTrait) -> Self::Output {
        impl_arithmetic!(self, rhs, *)
    }
}

impl Mul<&dyn SeriesTrait> for DataFrame {
    type Output = Result<DataFrame>;

    fn mul(self, rhs: &dyn SeriesTrait) -> Self::Output {
        (&self).mul(rhs)
    }
}

impl Div<&dyn SeriesTrait> for &DataFrame {
    type Output = Result<DataFrame>;

    fn div(self, rhs: &dyn SeriesTrait) -> Self::Output {
        impl_arithmetic!(self, rhs, /)
    }
}

impl Div<&dyn SeriesTrait> for DataFrame {
    type Output = Result<DataFrame>;

    fn div(self, rhs: &dyn SeriesTrait) -> Self::Output {
        (&self).div(rhs)
    }
}

impl Rem<&dyn SeriesTrait> for &DataFrame {
    type Output = Result<DataFrame>;

    fn rem(self, rhs: &dyn SeriesTrait) -> Self::Output {
        impl_arithmetic!(self, rhs, %)
    }
}

impl Rem<&dyn SeriesTrait> for DataFrame {
    type Output = Result<DataFrame>;

    fn rem(self, rhs: &dyn SeriesTrait) -> Self::Output {
        (&self).rem(rhs)
    }
}
