import { ChefHat, ShoppingBag, Star, Users } from "lucide-solid"

export function Features() {
  return (
    <section class="py-16">
      <h2 class="text-3xl font-bold text-center mb-8">Why Choose HomeCook?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <FeatureCard
          Icon={ChefHat}
          title="Home-Cooked Meals"
          description="Enjoy authentic, homemade dishes prepared with love."
        />
        <FeatureCard
          Icon={Users}
          title="Support Local Cooks"
          description="Empower local home cooks and strengthen your community."
        />
        <FeatureCard
          Icon={ShoppingBag}
          title="Easy Ordering"
          description="Browse menus and order with just a few clicks."
        />
        <FeatureCard
          Icon={Star}
          title="Quality Assured"
          description="All our home cooks are vetted for quality and safety."
        />
      </div>
    </section>
  )
}

function FeatureCard({ Icon, title, description }) {
  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <Icon class="w-12 h-12 text-primary" />
        <h3 class="card-title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
