import {
	removeNotification,
	renderNotification,
} from '../components/Notification';

export class Notification {
	constructor(message, type = 'info') {
		this.message = message;
		this.type = type;
	}

	show() {
		renderNotification(this);
		setTimeout(() => {
			this.close();
		}, 5000);
	}

	close() {
		removeNotification(this);
	}
}
