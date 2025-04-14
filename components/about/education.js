import EducationItem from "./education-item";

const Education = () => {
    return (
        <>
            <EducationItem
                title="Higher Secondary School"
                university="Jawahar Navodaya Vidyalaya,Indore"
                description="Developed a solid foundation in logical reasoning, quantitative analysis, and problem-solving skills essential for technical disciplines."
                subject="Science"
                gpa="7.5"
            />
            <EducationItem
                title="Bachelor of Engineering"
                university="Rustamji Institite of Technology"
                description="Mastered core concepts like data structures, algorithms, and modern web technologies to build scalable and efficient applications."
                subject="Computer Science"
                gpa="7.17"
            />
        </>
    );
};

export default Education;
