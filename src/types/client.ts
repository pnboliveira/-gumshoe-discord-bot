import { Client, Collection } from 'discord.js';

export class MySuperClient extends Client {

	public commands: Collection<string, object>;

	constructor(options){
		super(options);
		this.commands = new Collection();
	}
}