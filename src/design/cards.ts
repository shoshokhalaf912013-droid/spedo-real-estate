import { GRADIENTS } from "./gradients";
import { SHADOWS } from "./shadows";

export const SPEDO_CARD = {

    primary: `
        group
        relative
        overflow-hidden

        rounded-[34px]

        border
        border-[#D4AF37]/15

        ${GRADIENTS.navy}

        p-10

        transition-all
        duration-500

        hover:-translate-y-3
        hover:border-[#D4AF37]/60

        ${SHADOWS.gold}
    `,

    light: `
        rounded-[34px]
        bg-white/80
        border
        border-[#D4AF37]/15
        p-10
    `,

};