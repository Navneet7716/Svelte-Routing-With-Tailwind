<script lang="ts">
    import { Route } from "svelte-routing";
    import Loader from "./Loader.svelte";
    export let path: string;
    export let component: any;
    let isValid = true;
</script>

{#if isValid}
    <Route {path} let:params>
        {#await component}
            <Loader />
        {:then { default: Component }}
            <Component {params} />
        {:catch error}
            Failed to load component
        {/await}
    </Route>
{:else}
    <Route path="/asdkmsadkm" />
{/if}
