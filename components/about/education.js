import EducationItem from "./education-item";

import FadeInLeft from "@/ui/animation/fade-in-left";

const Education = () => {
    return (
        <>
            <FadeInLeft delay={1.4}>
                <EducationItem
                    title="Bachelor of Engineering"
                    university="Rustamji Institite of Technology"
                    description="Mastered core concepts like data structures, algorithms, and modern web technologies to build scalable and efficient applications."
                    subject="Computer Science"
                    gpa="7.17"
                />
            </FadeInLeft>
            <FadeInLeft delay={1.6}>
                <EducationItem
                    title="Higher Secondary School"
                    university="Jawahar Navodaya Vidyalaya,Indore"
                    description="Developed a solid foundation in logical reasoning, quantitative analysis, and problem-solving skills essential for technical disciplines."
                    subject="Science"
                    gpa="7.5"
                />
            </FadeInLeft>
        </>
    );
};

export default Education;
