import mongoose from "mongoose";

export const ClothSchema = new mongoose.Schema(
	{
		clothName: {
			type: String,
			required: false,
		},
		clothType: {
			type: String,
			required: true,
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
			default: "",
		},
		churiHata: {
			type: String,
			default: "",
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
			required: false,
		},
		isChain: {
			type: Boolean,
			required: false,
		},
		isMotaShuta: {
			type: Boolean,
			required: false,
		},
		isDoubleSelai: {
			type: Boolean,
			required: false,
		},
		isMotaRabar: {
			type: Boolean,
			required: false,
		},
		is2Pocket: {
			type: Boolean,
			required: false,
		},
		isMobilePocket: {
			type: Boolean,
			required: false,
		},
		isBendRoundColar: {
			type: Boolean,
			required: false,
		},
		isKotiColar: {
			type: Boolean,
			required: false,
		},
		isDoublePlate: {
			type: Boolean,
			required: false,
		},
		isRoundcolar: {
			type: Boolean,
			required: false,
		},
		isSinglePlate: {
			type: Boolean,
			required: false,
		},
		isFull: {
			type: Boolean,
			required: false,
		},
		isSamna: {
			type: Boolean,
			required: false,
		},
		isColar: {
			type: Boolean,
			required: false,
		},
		isMura: {
			type: Boolean,
			required: false,
		},
		isHata: {
			type: Boolean,
			required: false,
		},
		isKop: {
			type: Boolean,
			required: false,
		},
		isSidePocket: {
			type: Boolean,
			required: false,
		},
		isKandi: {
			type: Boolean,
			required: false,
		},
		isFullBodySita: {
			type: Boolean,
			required: false,
		},
		isColarSingle: {
			type: Boolean,
			required: false,
		},
		isColarDouble: {
			type: Boolean,
			required: false,
		},
		isSamnaSita: {
			type: Boolean,
			required: false,
		},
		isGolGola: {
			type: Boolean,
			required: false,
		},
		isOneChain: {
			type: Boolean,
			required: false,
		},
		isOneGuntiDana: {
			type: Boolean,
			required: false,
		},
		is3GuntiDana: {
			type: Boolean,
			required: false,
		},
		price: {
			type: Number,
			required: false,
		},
	},
	{
		timesptamps: true,
	}
);
