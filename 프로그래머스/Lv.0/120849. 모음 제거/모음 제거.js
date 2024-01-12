const solution = (my_string) => {
    // my_string.replaceAll("i", "").replaceAll("e", "").replaceAll("i","").replaceAll("o","").replaceAll("u","")
    const vowels = ["a", "e", "i", "o", "u"]
    let result = my_string;
    vowels.forEach(vowel => result = result.replaceAll(vowel, ""))
    return result
}

