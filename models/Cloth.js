import mongoose from "mongoose";

const { Schema, model } = mongoose;

export const clothSchema = new Schema(
	{
		clothName: {
			type: String,
			required: false,
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
		puut: {
			type: String,
			required: false,
		},
		body: {
			type: String,
			required: false,
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
		timestamps: true,
	}
);

const Cloth = model("Cloth", clothSchema);

export default Cloth;
