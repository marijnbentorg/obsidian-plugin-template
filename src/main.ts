import { Plugin } from 'obsidian';
import { MyPluginSettingTab } from './settings';
import { MyPluginSettings, DEFAULT_SETTINGS } from './types';

export default class MyPlugin extends Plugin {
    settings: MyPluginSettings;

    async onload() {

        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
        this.addSettingTab(new MyPluginSettingTab(this.app, this));
        
        // this.addCommand({
        //     id: '',
        //     name: '',
        //     callback: () => null
        // });

        // this.addRibbonIcon('printer', 'Print Note', (evt: MouseEvent) => {
        // });
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}