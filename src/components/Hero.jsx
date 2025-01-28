export function Hero() {
  return (
    <section class="hero min-h-[70vh] bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/placeholder.svg?height=400&width=400"
          alt="Delicious homemade food"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Homemade Goodness, Delivered!</h1>
          <p class="py-6">
            Discover delicious, homemade meals from talented home cooks in your neighborhood. Support local, eat fresh!
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  )
}
