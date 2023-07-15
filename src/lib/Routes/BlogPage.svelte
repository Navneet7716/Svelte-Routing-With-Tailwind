<script lang="ts">
    import blogs from "../Common/blogs.json";
    export let id: string;

    let blog = blogs.find((el) => el.id === id);
</script>

<div class="container mx-auto px-4 mt-2 lg:w-3/4 w-full">
    <h2 class="prose text-4xl font-bold underline mb-10">{blog.title}</h2>
    <article
        contenteditable="false"
        class="prose w-full mt-4"
        bind:innerHTML={blog.description}
    />
</div>
