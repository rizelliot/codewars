// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// My solution:

function bmi(weight, height) {
  const bmiValue = weight / height ** 2;

  switch (true) {
    case bmiValue <= 18.5:
      return "Underweight";
    case bmiValue <= 25.0:
      return "Normal";
    case bmiValue <= 30.0:
      return "Overweight";
    case bmiValue > 30:
      return "Obese";
  }
}
