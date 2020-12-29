
export default {

  async dataURLToFile (imageString, filename, mimeType) {
    const res = await fetch(imageString)
    const blob = await res.blob()
    return new File([blob], filename, { type: mimeType })
  },
  minutesWithLeadingZeros (minString) {
    return (minString < 10 ? '0' : '') + minString
  },
  convert12HourTo24Hour (amPmString) {
    const d = new Date('1/1/2013 ' + amPmString)
    return d.getHours() + ':' + this.minutesWithLeadingZeros(d.getMinutes())
  },
  getRandomNumber (min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  },
  sanitizeInteger (value) {
    if (!value) {
      return null
    }
    return value.replace(/\D/g, '')
  },
  extraIdFromYoutubeURL (url) {
    const p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    if (url.match(p)) {
      return url.match(p)[1] // return video id only
    }
    return false
  },
  truncate (str, length, ending) {
    if (length == null) {
      length = 100
    }
    if (ending == null) {
      ending = '...'
    }
    try {
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending
      } else {
        return str
      }
    } catch (e) {
    }
  },

  truncate_words (str, max = 10, ending = '...') {
    try {
      const array = str.trim().split(' ')
      const ellipsis = array.length > max ? ending : ''

      return array.slice(0, max).join(' ') + ellipsis
    } catch (e) {
    }
  },
  capitalize (str, firstCharacterOnly = false, lower = false) {
    if (typeof str !== 'string') { return '' }
    if (firstCharacterOnly) {
      return (
        (lower ? str.toLowerCase() : str).charAt(0).toUpperCase() + str.slice(1)
      )
    }

    return (lower ? str.toLowerCase() : str).replace(
      /(?:^|\s|["'([{])+\S/g,
      match => match.toUpperCase()
    )
  },

  adaptHeight (heightInCM) {
    heightInCM = parseInt(heightInCM)
    if (!heightInCM || isNaN(heightInCM)) {
      return '-'
    }
    if (typeof heightInCM !== 'number') { return '' }

    const realFeet = (heightInCM * 0.3937) / 12
    const feet = Math.floor(realFeet)
    const inches = Math.round((realFeet - feet) * 12)
    return feet + '"' + inches + ''
  },
  adaptWeight (weightInLbs) {
    weightInLbs = parseInt(weightInLbs)
    if (!weightInLbs || isNaN(weightInLbs)) {
      return '-'
    }
    if (typeof weightInLbs !== 'number') { return '' }

    return (0.4536 * weightInLbs).toFixed(0) + ' kg'
  },
  capFirstLetter (val) {
    return val.charAt(0).toUpperCase() + val.slice(1)
  },
  notEmptyObject (someObject) {
    return Object.keys(someObject).length
  },
  debugFormDataEntries (formData) {
    for (const pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }
  },
  doesPropertyValueExists (arg) {
    try {
      return arg
    } catch (e) {
      return false
    }
  },

  convertJsonToFormData ({ data }) {
    const formData = new FormData()
    const entries = Object.entries(data) // returns array of object property as [key, value]
    // https://medium.com/front-end-weekly/3-things-you-didnt-know-about-the-foreach-loop-in-js-ff02cec465b1

    for (let i = 0; i < entries.length; i++) {
      // don't try to be smart by replacing it with entries.each, it has drawbacks
      const arKey = entries[i][0]
      let arVal = entries[i][1]
      if (typeof arVal === 'boolean') {
        arVal = arVal === true ? 1 : 0
      }
      if (Array.isArray(arVal)) {
        if (this.isFile(arVal[0])) {
          for (let z = 0; z < arVal.length; z++) {
            formData.append(`${arKey}[]`, arVal[z])
          }

          continue // we don't need to append current element now, as its elements already appended
        } else if (arVal[0] instanceof Object) {
          for (let j = 0; j < arVal.length; j++) {
            if (arVal[j] instanceof Object) {
              // if first element is not file, we know its not files array
              for (const prop in arVal[j]) {
                if (Object.prototype.hasOwnProperty.call(arVal[j], prop)) {
                  // do stuff
                  if (!isNaN(Date.parse(arVal[j][prop]))) {
                    // console.log('Valid Date \n')
                    // (new Date(fromDate)).toUTCString()
                    formData.append(
                      `${arKey}[${j}][${prop}]`,
                      new Date(arVal[j][prop])
                    )
                  } else {
                    formData.append(`${arKey}[${j}][${prop}]`, arVal[j][prop])
                  }
                }
              }
            }
          }
          continue // we don't need to append current element now, as its elements already appended
        } else {
          arVal = JSON.stringify(arVal)
        }
      }

      if (arVal === null) {
        continue
      }
      formData.append(arKey, arVal)
    }
    return formData
  },

  isFile (input) {
    if ('File' in window && input instanceof File) { return true } else { return false }
  },
  convertCentimetersToFeet (n) {
    try {
      const realFeet = (n * 0.3937) / 12
      let feet = Math.floor(realFeet)
      let inches = Math.round((realFeet - feet) * 12)
      if (inches === 12) {
        inches = 0
        feet++
      }
      return {
        feet,
        inches
      }
    } catch (e) {
    }
    return false
  },

  convertFeetAndInchesToCm (feet, inches = 0) {
    try {
      const cmFromFeet = feet / 0.032808
      const cmFromInches = inches / 0.3937
      return (cmFromFeet + cmFromInches).toFixed(0)
    } catch (e) {
    }
    return false
  },
  convertPoundsToKilograms (lbs) {
    try {
      return (0.4536 * lbs).toFixed(0)
    } catch (e) {
    }
    return false
  },
  convertKgToPounds (value) {
    try {
      const convertionUnit = 0.45359237
      return (value / convertionUnit).toFixed(0)
    } catch (e) {
    }
    return false
  }
}
