<script lang="ts">

    import Tabs from "@ticatec/uniface-element/Tabs";
    import type TabPage from "$lib/multiple-modules/TabPage";
    import type {TabCloseHandler} from "@ticatec/uniface-element/Tabs"

    export let confirmCloseTab: TabCloseHandler = null as unknown as TabCloseHandler;

    export const showPage = (title: string, url: string) => {
        tabs = [...tabs, {title, url}];
        activeTab = tabs[tabs.length-1]
    }

    let tabs: Array<TabPage> = [];

    let activeTab: any;


</script>

<Tabs style="width: 100%; height: 100%" bind:activeTab {tabs} textField="title" closable={true} closeHandler={confirmCloseTab}>
    {#each tabs as tab}
        <div style="width: 100%; height: 100%; overflow: hidden; display: {activeTab===tab ? 'block' : 'none'}">
            <iframe style="width: 100%; height: 100%; border: none" src={tab.url}></iframe>
        </div>
    {/each}
</Tabs>

