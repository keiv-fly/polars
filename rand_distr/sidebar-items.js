initSidebarItems({"enum":[["BernoulliError","Error type returned from `Bernoulli::new`."],["BetaError","Error type returned from `Beta::new`."],["BinomialError","Error type returned from `Binomial::new`."],["CauchyError","Error type returned from `Cauchy::new`."],["ChiSquaredError","Error type returned from `ChiSquared::new` and `StudentT::new`."],["DirichletError","Error type returned from `Dirchlet::new`."],["ExpError","Error type returned from `Exp::new`."],["FisherFError","Error type returned from `FisherF::new`."],["GammaError","Error type returned from `Gamma::new`."],["InverseGaussianError","Error type returned from `InverseGaussian::new`"],["NormalError","Error type returned from `Normal::new` and `LogNormal::new`."],["NormalInverseGaussianError","Error type returned from `NormalInverseGaussian::new`"],["ParetoError","Error type returned from `Pareto::new`."],["PertError","Error type returned from [`Pert`] constructors."],["PoissonError","Error type returned from `Poisson::new`."],["TriangularError","Error type returned from [`Triangular::new`]."],["WeibullError","Error type returned from `Weibull::new`."],["WeightedError","Error type returned from `WeightedIndex::new`."]],"mod":[["uniform","A distribution uniformly sampling numbers within a given range."],["weighted_alias","This module contains an implementation of alias method for sampling random indices with probabilities proportional to a collection of weights."]],"struct":[["Alphanumeric","Sample a `char`, uniformly distributed over ASCII letters and numbers: a-z, A-Z and 0-9."],["Bernoulli","The Bernoulli distribution."],["Beta","The Beta distribution with shape parameters `alpha` and `beta`."],["Binomial","The binomial distribution `Binomial(n, p)`."],["Cauchy","The Cauchy distribution `Cauchy(median, scale)`."],["ChiSquared","The chi-squared distribution `χ²(k)`, where `k` is the degrees of freedom."],["Dirichlet","The Dirichlet distribution `Dirichlet(alpha)`."],["DistIter","An iterator that generates random values of `T` with distribution `D`, using `R` as the source of randomness."],["Exp","The exponential distribution `Exp(lambda)`."],["Exp1","Samples floating-point numbers according to the exponential distribution, with rate parameter `λ = 1`. This is equivalent to `Exp::new(1.0)` or sampling with `-rng.gen::<f64>().ln()`, but faster."],["FisherF","The Fisher F distribution `F(m, n)`."],["Gamma","The Gamma distribution `Gamma(shape, scale)` distribution."],["InverseGaussian","The inverse Gaussian distribution"],["LogNormal","The log-normal distribution `ln N(mean, std_dev**2)`."],["Normal","The normal distribution `N(mean, std_dev**2)`."],["NormalInverseGaussian","The normal-inverse Gaussian distribution"],["Open01","A distribution to sample floating point numbers uniformly in the open interval `(0, 1)`, i.e. not including either endpoint."],["OpenClosed01","A distribution to sample floating point numbers uniformly in the half-open interval `(0, 1]`, i.e. including 1 but not 0."],["Pareto","Samples floating-point numbers according to the Pareto distribution"],["Pert","The PERT distribution."],["Poisson","The Poisson distribution `Poisson(lambda)`."],["Standard","A generic random value distribution, implemented for many primitive types. Usually generates values with a numerically uniform distribution, and with a range appropriate to the type."],["StandardNormal","Samples floating-point numbers according to the normal distribution `N(0, 1)` (a.k.a. a standard normal, or Gaussian). This is equivalent to `Normal::new(0.0, 1.0)` but faster."],["StudentT","The Student t distribution, `t(nu)`, where `nu` is the degrees of freedom."],["Triangular","The triangular distribution."],["Uniform","Sample values uniformly between two bounds."],["UnitBall","Samples uniformly from the unit ball (surface and interior) in three dimensions."],["UnitCircle","Samples uniformly from the edge of the unit circle in two dimensions."],["UnitDisc","Samples uniformly from the unit disc in two dimensions."],["UnitSphere","Samples uniformly from the surface of the unit sphere in three dimensions."],["Weibull","Samples floating-point numbers according to the Weibull distribution"],["WeightedIndex","A distribution using weighted sampling to pick a discretely selected item."]],"trait":[["Distribution","Types (distributions) that can be used to create a random instance of `T`."]]});