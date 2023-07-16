<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import HomePage from "./lib/Routes/HomePage.svelte";
    import Navbar from "./lib/Common/Navbar.svelte";
    import ProtectedRoutes from "./lib/Common/ProtectedRoutes.svelte";
    const BlogListPage = import("./lib/Routes/BlogsListPage.svelte");
    const BlogPage = import("./lib/Routes/BlogPage.svelte");
</script>

<Router>
    <Navbar />
    <div style="min-height: 88vh;">
        <Route path="/">
            <HomePage />
        </Route>
        <ProtectedRoutes path="/blogs" component={BlogListPage} />
        <ProtectedRoutes path="/blog/:id" component={BlogPage} />
        <Route path="/*">
            <div class="text-center text-4xl mt-10">404 Not found :)</div>
        </Route>
    </div>
    <div class="pt-10 pb-4 px-5 text-center">
        Mentorpick all rights reserved (Jk 😂)
    </div>
</Router>
