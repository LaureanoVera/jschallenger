// 1 - Añadir cada letra del texto a un arreglo
// 2 - Crear una variable para contar las letras
// 3 - Recorrer el array con map
// 4 - Convertir letras en lower
// 5 - Por cada elemento que coincida incrementar la variable en 1
// 6 - Retornar 'cantLetters'

const characterCounter = (text, target) => {
  const arrayLetters = text.split('')
  let cantLettes = 0

  arrayLetters.map(el => {
      let elLower = el.toLowerCase()
      elLower === target
        ? cantLettes++
        : cantLettes
    }
  )

  return cantLettes
}

// TEST
const test = (text, target, cant) => {
  let result = characterCounter(text, target)
  result === cant
    ? console.log(`test ${target}: passed`)
    : console.log(`test ${target}: failed`)
}

const text = 'How many times does the character occur in this sentence?'

const one = [text, 'm', 2]
const two = [text, 'h', 4]
const three = [text, '?', 1]
const four = [text, 'z', 0]

test(...one)
test(...two)
test(...three)
test(...four)
// TEST

const main = () => {
  const result = characterCounter('laureano ivan gerardo vera', 'a')
  console.log(result);
}
main()