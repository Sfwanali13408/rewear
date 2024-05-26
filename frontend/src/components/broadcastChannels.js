// broadcastChannels.js
import { BroadcastChannel } from 'broadcast-channel';

export const loginChannel = new BroadcastChannel('loginChannel');
export const logoutChannel = new BroadcastChannel('logoutChannel');
