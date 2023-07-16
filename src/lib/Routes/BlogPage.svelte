<script lang="ts">
    import { Link } from "svelte-routing";
    import blogs from "../Common/blogs.json";
    import { fade } from "svelte/transition";
    import type { RouteParams } from "svelte-routing/types/Route";
    export let params: RouteParams;

    let blog = blogs.find((el) => el.id === params.id);
</script>

<div
    class="container mx-auto px-4 mt-2 lg:w-3/4 w-full"
    in:fade={{ delay: 10, duration: 200 }}
>
    <div class="text-sm breadcrumbs">
        <ul>
            <li><Link to="/blogs">Blogs</Link></li>
            <li>{blog.title}</li>
        </ul>
    </div>
    <h2 class="prose text-4xl font-bold underline my-5 break-words">
        {blog.title}
    </h2>
    <article
        contenteditable="false"
        class="prose max-w-max mt-4 break-words"
        bind:innerHTML={blog.description}
    />
</div>
