import mongoose from "mongoose";

export const ClothSchema = new mongoose.Schema(
	{
		clothName: {
			type: String,
			default: "",
			required: false,
		},
		clothType: {
			type: String,
			default: "",

			required: false,
		},
		clothQuantity: {
			type: Number,
			default: 1,
		},
		luj: {
			type: String,
			default: "",

			required: false,
		},
		gher: {
			type: String,
			default: "",

			required: false,
		},
		lomba: {
			type: String,
			default: "",

			required: false,
		},
		payerMuhri: {
			type: String,
			default: "",

			required: false,
		},
		bookPocket: {
			type: String,
			default: "",

			required: false,
		},
		hatarMuhri: {
			type: String,
			default: "",

			required: false,
		},
		hiegh: {
			type: String,
			default: "",

			required: false,
		},
		kop: {
			type: String,
			default: "",

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
			default: "",

			required: false,
		},
		body: {
			type: String,
			default: "",

			required: false,
		},
		ranerLuj: {
			type: String,
			default: "",

			required: false,
		},
		churiHata: {
			type: String,
			default: "",

			required: false,
		},
		isPichonePocket: {
			type: Boolean,
			default: false,
		},
		hata: {
			type: String,
			default: "",

			required: false,
		},
		kolarToyri: {
			type: String,
			default: "",

			required: false,
		},
		komor: {
			type: String,
			default: "",
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
