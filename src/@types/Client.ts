import { Client, Collection } from 'discord.js';

export default class extends Client {

	public commands: Collection<string, object>;

	constructor(options){
		super(options);
		this.commands = new Collection();
	}
}