// Define MajorCredits interface
interface MajorCredits {
    credits: number;
    brand: 'Major'; // Unique identifier
}

// Define MinorCredits interface
interface MinorCredits {
    credits: number;
    brand: 'Minor'; // Unique identifier
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Major' // Maintain the unique identifier
    };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Minor' // Maintain the unique identifier
    };
}
