export function Header() {
  return (
    <header class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">HomeCook</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a>How it Works</a>
          </li>
          <li>
            <a>Become a Seller</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
