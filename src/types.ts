export type Color = {
	r: number
	g: number
	b: number
}

export type PaintBoard = {
	width: number
	height: number
	pixels: Color[][]
}

export type Token = {
	uid: number
	token: string
}

export enum PaintResultCode {
	SUCCESS = 0xef,
	INVALID_TOKEN = 0xed,
	COOLING = 0xee,
	BAD_FORMAT = 0xec,
	NO_PERMISSION = 0xeb,
	SERVER_ERROR = 0xea
}

export type TokenRequest = {
	uid: number
	paste: string
}

export type WebSocketData = {
	connectedAt: number
	lastPing: number
	uid?: number
	token?: string
}

export interface WebSocketServer {
	publish(topic: string, data: Uint8Array): void
}

export type ColorUpdateListener = (x: number, y: number, color: Color) => void
