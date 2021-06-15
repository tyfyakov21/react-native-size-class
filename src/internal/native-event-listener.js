import { NativeModules, NativeEventEmitter } from 'react-native';

const ensureNativeModule = () => {
	if (!NativeModules.ReactEventSenderModule) {
		throw new TypeError('ReactEventSenderModule is not available');
	}
};

export const nativeEventsEmitter = () => {
	ensureNativeModule();

	const ReactEventSenderModuleEmitter = new NativeEventEmitter(
		NativeModules.ReactEventSenderModule,
	);

	return ReactEventSenderModuleEmitter;
};