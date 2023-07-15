<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import HomePage from "./lib/Routes/HomePage.svelte";
    import Navbar from "./lib/Common/Navbar.svelte";
    import BlogsListPage from "./lib/Routes/BlogsListPage.svelte";
    import BlogPage from "./lib/Routes/BlogPage.svelte";
</script>

<Router>
    <Navbar />
    <div>
        <Route path="/">
            <HomePage />
        </Route>
        <Route path="/blogs">
            <BlogsListPage />
        </Route>
        <Route path="/blog/:id" let:params>
            <BlogPage id={params.id} />
        </Route>
        <Route path="/*" let:params>
            <div class="text-center text-4xl mt-10">404 Not found :)</div>
        </Route>
    </div>
</Router>
