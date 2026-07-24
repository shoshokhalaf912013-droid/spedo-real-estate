import { searchInterpreter }
from "./SearchInterpreter";

import { recommendationEngine }
from "./RecommendationEngine";

import projectsKnowledge
from "@/data/knowledge/projects";

import projectAliases
from "@/data/knowledge/aliases";

import {
    comparisonEngine
}
from "@/core/engines/comparisonEngine";

export class SpedoAssistant {

    private findProjectKnowledge(
        question: string
    ) {

        const q =
            question
                .toLowerCase();

        for (

            const project of
            projectsKnowledge

        ) {

            const aliases =

                projectAliases[
                    project.name as keyof
                    typeof projectAliases
                ] || [];

            const found =

                aliases.some(

                    alias =>

                        q.includes(
                            alias
                                .toLowerCase()
                        )

                );

            if (

                found

            ) {

                return project;

            }

        }

        return undefined;

    }

    private handleComparison(
        question: string
    ): string | null {

        const q =
            question
                .toLowerCase();

        const comparisonWords = [

            "قارن",

            "مقارنة",

            "الفرق",

            "افضل",

            "أفضل",

            "ايهما",

            "أيهما",

            "من الافضل",

            "من الأفضل",

            "ام",

            "أم",

            "vs",

            "versus"

        ];

        const isComparison =

            comparisonWords.some(

                word =>

                    q.includes(
                        word.toLowerCase()
                    )

            );

        if (

            !isComparison

        ) {

            return null;

        }

        const foundProjects =

            projectsKnowledge.filter(

                project => {

                    const aliases =

                        projectAliases[
                            project.name as keyof
                            typeof projectAliases
                        ] || [];

                    return aliases.some(

                        alias =>

                            q.includes(
                                alias
                                    .toLowerCase()
                            )

                    );

                }

            );

        if (

            foundProjects.length < 2

        ) {

            return null;

        }

        return comparisonEngine.compare(

            foundProjects[0].name,

            foundProjects[1].name

        );

    }

    ask(
        question: string
    ) {

        const query =

            searchInterpreter
                .interpret(
                    question
                );

        const results =

            recommendationEngine
                .recommend(
                    query
                );

        const projects =

            Array.from(

                new Set(

                    results.map(

                        unit =>

                            unit.project

                    )

                )

            );

        return {

            question,

            query,

            total:
                results.length,

            projects,

            results:
                results.slice(
                    0,
                    10
                )

        };

    }

    answer(
        question: string
    ): string {

        const comparison =

            this.handleComparison(
                question
            );

        if (

            comparison

        ) {

            return comparison;

        }

        const data =
            this.ask(
                question
            );

        const knowledge =

            this.findProjectKnowledge(
                question
            );

        if (

            knowledge

            &&

            (

                question.includes(
                    "اين"
                )

                ||

                question.includes(
                    "أين"
                )

                ||

                question.includes(
                    "location"
                )

                ||

                question.includes(
                    "العائد"
                )

                ||

                question.includes(
                    "roi"
                )

                ||

                question.includes(
                    "مميزات"
                )

                ||

                question.includes(
                    "استثمار"
                )

            )

        ) {

            return `

${knowledge.name}

📍 الموقع:

${knowledge.locationArabic}

✈️ يبعد عن المطار:

${knowledge.distanceFromAirport}

🌊 يبعد عن البحر:

${knowledge.distanceFromSea}

📈 العائد الاستثمارى المتوقع:

${knowledge.roi}

🏠 العائد الإيجارى:

${knowledge.rentalYield}

💳 أنظمة السداد:

${knowledge.paymentPlans.join("\n")}

⭐ المميزات:

${knowledge.advantages.join("\n")}

`;

        }
        if (

            data.query.intent ===
            "greeting"

        ) {

            return `

مرحباً بك فى SPEDO AI.

يمكنك سؤالى عن:

• Mark Resort
• Blue Crest
• Marvento
• Hurghada Heights

وكل المشاريع الموجودة داخل المنصة.

يمكنك الكتابة أو استخدام الميكروفون.

`;

        }

        if (

            data.query.intent ===
            "help"

        ) {

            return `

أنا SPEDO AI Assistant.

يمكنك سؤالي عن:

• ما المشاريع الموجودة؟
• أرخص وحدة في مارك ريزورت
• شقة أقل من 2 مليون
• أفضل مشروع للاستثمار
• قارن بين مارك وبلو كريست
• وحدات بالتقسيط
• استوديوهات مطلة على البول

وأبحث فقط داخل منصة SPEDO.

`;

        }

        if (

            data.query.intent ===
            "projects"

        ) {

            return `

المشاريع الموجودة حالياً على منصة SPEDO:

1- Mark Resort

2- Blue Crest

3- Marvento Resort

4- Hurghada Heights

إجمالي الوحدات المتاحة:

800 وحدة عقارية.

`;

        }

        if (

            data.query.intent ===
            "investment"

        ) {

            return `

أفضل المشاريع الاستثمارية الحالية داخل SPEDO:

🥇 Mark Resort
العائد المتوقع:
12% - 15%

🥈 Blue Crest
العائد المتوقع:
10% - 12%

🥉 Marvento Resort
العائد المتوقع:
9% - 11%

هل تريد مقارنة تفصيلية بين الأسعار أو العائد الاستثمارى؟

`;

        }

        if (

            data.total === 0

        ) {

            return (

                "لم أجد أي وحدات مطابقة لطلبك داخل منصة SPEDO."

            );

        }

        const first =
            data.results[0];

        if (

            data.query.intent ===
            "budget"

        ) {

            return `

وجدت ${data.total} وحدة مناسبة لميزانيتك.

المشاريع المتاحة:

${data.projects.join("\n")}

أرخص وحدة مناسبة:

المشروع:
${first.project}

رقم الوحدة:
${first.unitNo}

المساحة:
${first.area} متر مربع

السعر:
${first.price.toLocaleString()} جنيه.

سيتم قريباً إضافة زر لعرض جميع الوحدات داخل المنصة.

`;

        }

        if (

            data.projects.length === 1

        ) {

            return `

وجدت ${data.total} وحدة مناسبة داخل مشروع ${data.projects[0]}.

أرخص وحدة متاحة:

رقم الوحدة:
${first.unitNo}

المساحة:
${first.area} متر مربع

السعر:
${first.price.toLocaleString()} جنيه.

`;

        }

        return `

وجدت ${data.total} وحدة مناسبة موزعة على ${data.projects.length} مشاريع داخل SPEDO.

المشاريع:

${data.projects.join("\n")}

أرخص وحدة:

${first.project}

رقم الوحدة:
${first.unitNo}

المساحة:
${first.area} متر مربع

السعر:
${first.price.toLocaleString()} جنيه.

هل تريد المقارنة بين المشاريع أم التركيز على مشروع معين؟

`;

    }

}

export const spedoAssistant =
    new SpedoAssistant();

export default spedoAssistant;