// Ejercicio-09: Uso de Set

const colors = new Set()

colors.add('Rojo')
colors.add('Azul')
colors.add('Verde')
colors.add('Rojo')

console.log('Colores en Set:',colors)

const colorTocheck = 'Verde'
console.log(`¿${colorTocheck} existe en Set? 
${colors.has(colorTocheck)}`)