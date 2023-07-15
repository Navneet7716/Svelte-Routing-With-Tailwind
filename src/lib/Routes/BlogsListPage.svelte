<script lang="ts">
    import { Link } from "svelte-routing";
import blogs from "../Common/blogs.json";
</script>

<div class="flex items-center justify-center flex-col">
    <h1 class="text-4xl font-semibold mt-2">Trending Blogs</h1>

    <div class="container overflow-x-auto mt-2">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th />
                    <th>Title</th>
                    <th>Written on</th>
                    <th>Written by</th>
                </tr>
            </thead>
            <tbody>
                {#each blogs as blog, index}
                    <tr class="hover">
                        <td>{index + 1}</td>
                        <td><Link to={`/blog/${blog.id}`}>{blog.title}</Link></td>
                        <td>{new Date(blog.created_at).toLocaleString()}</td>
                        <td>{blog.author.userName}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
