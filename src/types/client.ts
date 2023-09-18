import { Client, Collection } from 'discord.js';

export class MySuperClient extends Client {

	public commands: Collection<any, any>;

	constructor(options?: any){
		 super(options);
		 this.commands = new Collection();
	}
}