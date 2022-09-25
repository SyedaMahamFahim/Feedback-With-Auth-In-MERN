const EmptyingAllInputs = () => {
    Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
      Array.from(document.querySelectorAll("textarea")).forEach(
        (input) => (input.value = "")
      );
}

export default EmptyingAllInputs;