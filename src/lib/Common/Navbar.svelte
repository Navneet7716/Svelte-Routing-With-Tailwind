<script>
    import { Link } from "svelte-routing";
    import { applyTheme } from "./applyTheme";

    let selected = localStorage.getItem("theme");
    $: {
        if (selected) {
            applyTheme(selected);
        }
    }
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
    class="navbar bg-base-100 border border-transparent rounded-md bg-transparent backdrop-blur antialiased sticky top-0 z-40"
>
    <div class="navbar-start">
        <div class="dropdown">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    /></svg
                >
            </label>
            <ul
                tabindex="0"
                class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li><Link to="/blogs">Blog</Link></li>
                <li>
                    <span>Courses</span>
                    <ul class="p-2">
                        <li><span>Course V1</span></li>
                        <li><span>Course V2</span></li>
                    </ul>
                </li>
                <li><span>Contests</span></li>

                <label class="my-2" for="theme-switcher">Theme</label>
                <li>
                    <select
                        id="theme-switcher"
                        class="select select-bordered ml-2 select-sm max-w-xs"
                        bind:value={selected}
                    >
                        <option value="cupcake">cupcake</option>
                        <option value="synthwave">synthwave</option>
                        <option value="dark">dark</option>
                        <option value="light">light</option>
                        <option value="dracula">dracula</option>
                    </select>
                </li>
                <li><button class="btn btn-outline btn-sm my-3">Login</button></li>
            </ul>
        </div>
        <Link to="/">
            <span class="btn btn-ghost normal-case text-xl"
                >Mentor<span class="font-light">Pick</span></span
            >
        </Link>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><Link to="/blogs">Blog</Link></li>
            <li tabindex="0">
                <details>
                    <summary>Courses</summary>
                    <ul class="p-2">
                        <li><span>Course V1</span></li>
                        <li><span>Course V2</span></li>
                    </ul>
                </details>
            </li>
            <li><span>Contests</span></li>
        </ul>
    </div>
    <div class="navbar-end hidden lg:flex">
        <button class="btn btn-outline btn-sm">Login</button>
        <label class="ml-2" for="theme-switcher">Theme</label>
        <select
            id="theme-switcher"
            class="select select-bordered ml-2 select-sm max-w-xs"
            bind:value={selected}
        >
            <option value="cupcake">cupcake</option>
            <option value="synthwave">synthwave</option>
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="dracula">dracula</option>
        </select>
    </div>
</div>
