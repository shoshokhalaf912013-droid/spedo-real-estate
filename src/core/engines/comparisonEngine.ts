import projectsKnowledge
from "@/data/knowledge/projects";

export class ComparisonEngine {

    compare(

        firstProjectName: string,

        secondProjectName: string

    ): string {

        const first =

            projectsKnowledge.find(

                project =>

                    project.name
                        .toLowerCase()

                        ===

                    firstProjectName
                        .toLowerCase()

            );

        const second =

            projectsKnowledge.find(

                project =>

                    project.name
                        .toLowerCase()

                        ===

                    secondProjectName
                        .toLowerCase()

            );

        if (

            !first ||

            !second

        ) {

            return (

                "لم أتمكن من العثور على أحد المشروعين للمقارنة."

            );

        }

        const recommendation =

            this.recommend(

                first,

                second

            );

        return `

📊 مقارنة استثمارية

========================

🏢 ${first.name}

📈 العائد الاستثمارى:

${first.roi}

🏠 العائد الإيجارى:

${first.rentalYield}

🌊 المسافة من البحر:

${first.distanceFromSea}

✈️ المسافة من المطار:

${first.distanceFromAirport}

========================

🏢 ${second.name}

📈 العائد الاستثمارى:

${second.roi}

🏠 العائد الإيجارى:

${second.rentalYield}

🌊 المسافة من البحر:

${second.distanceFromSea}

✈️ المسافة من المطار:

${second.distanceFromAirport}

========================

🏆 التوصية النهائية:

${recommendation}

`;

    }

    private recommend(

        first: any,

        second: any

    ): string {

        const firstROI =

            parseInt(
                first.roi
            );

        const secondROI =

            parseInt(
                second.roi
            );

        if (

            firstROI >

            secondROI

        ) {

            return `

${first.name}

أفضل للمستثمر الباحث عن أعلى عائد استثمارى وإيجارى.

${second.name}

مناسب للاستثمار متوسط المخاطر.

`;

        }

        if (

            secondROI >

            firstROI

        ) {

            return `

${second.name}

أفضل للمستثمر الباحث عن أعلى عائد استثمارى وإيجارى.

${first.name}

مناسب للاستثمار متوسط المخاطر.

`;

        }

        return `

المشروعان متقاربان فى العائد الاستثمارى.

ويُنصح بالاختيار حسب الموقع ونظام السداد.

`;

    }

}

export const comparisonEngine =

    new ComparisonEngine();

export default comparisonEngine;