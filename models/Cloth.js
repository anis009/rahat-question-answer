import mongoose from "mongoose";

export const ClothSchema = new mongoose.Schema(
	{
		clothName: {
			type: String,
			required: false,
		},
		clothType: {
			type: String,
			required: false,
		},
		clothQuantity: {
			type: Number,
			default: 1,
		},
		lomba: {
			type: String,
			required: false,
		},
		payerMuhri: {
			type: String,
			required: false,
		},
		hatarMuhri: {
			type: String,
			required: false,
		},
		hiegh: {
			type: String,
			required: false,
		},
		kop: {
			type: String,
			required: false,
		},
		isOnePocket: {
			type: Boolean,
			default: false,
		},
		isTwoPocketChain: {
			type: Boolean,
			default: false,
		},
		puut: {
			type: String,
			required: false,
		},
		body: {
			type: String,
			required: false,
		},
		ranerLuj: {
			type: String,
			required: false,
		},
		churiHata: {
			type: String,
			required: false,
		},
		isPichonePocket: {
			type: Boolean,
			default: false,
		},
		hata: {
			type: String,
			required: false,
		},
		kolarToyri: {
			type: String,
			required: false,
		},
		komor: {
			type: String,
			required: false,
		},
		isPoket: {
			type: Boolean,
			default: false,
		},
		isChain: {
			type: Boolean,
			default: false,
		},
		isMotaShuta: {
			type: Boolean,
			default: false,
		},
		isDoubleSelai: {
			type: Boolean,
			default: false,
		},
		isMotaRabar: {
			type: Boolean,
			default: false,
		},
		is2Pocket: {
			type: Boolean,
			default: false,
		},
		isMobilePocket: {
			type: Boolean,
			default: false,
		},
		isBendRoundColar: {
			type: Boolean,
			default: false,
		},
		isKotiColar: {
			type: Boolean,
			default: false,
		},
		isDoublePlate: {
			type: Boolean,
			default: false,
		},
		isRoundcolar: {
			type: Boolean,
			default: false,
		},
		isSinglePlate: {
			type: Boolean,
			default: false,
		},
		isFull: {
			type: Boolean,
			default: false,
		},
		isSamna: {
			type: Boolean,
			default: false,
		},
		isColar: {
			type: Boolean,
			default: false,
		},
		isMura: {
			type: Boolean,
			default: false,
		},
		isHata: {
			type: Boolean,
			default: false,
		},
		isKop: {
			type: Boolean,
			default: false,
		},
		isSidePocket: {
			type: Boolean,
			default: false,
		},
		isKandi: {
			type: Boolean,
			default: false,
		},
		isFullBodySita: {
			type: Boolean,
			default: false,
		},
		isColarSingle: {
			type: Boolean,
			default: false,
		},
		isColarDouble: {
			type: Boolean,
			default: false,
		},
		isSamnaSita: {
			type: Boolean,
			default: false,
		},
		isGolGola: {
			type: Boolean,
			default: false,
		},
		isOneChain: {
			type: Boolean,
			default: false,
		},
		isOneGuntiDana: {
			type: Boolean,
			default: false,
		},
		is3GuntiDana: {
			type: Boolean,
			default: false,
		},
		price: {
			type: Number,
			default: 0,
		},
	},
	{
		timesptamps: true,
	}
);
