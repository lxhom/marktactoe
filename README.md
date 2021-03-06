# MarkTacToe

Hi! This is Mark Tac Toe, a TicTacToe bot written in JS and Markdown.

## Instructions:

- The game doesn't work on the GitHub app yet, so please use a browser.
- You'll see a calibration field when you start, and you have to press any field in there to start the game.
- You have to click only on the tables which are in the area of your screen where the calibration field was at the start.
- If you see a text saying that your browser window is too large while calibrating, zoom in or resize your window to continue.
- You can resize your browser window to the size of the calibration field for a better experience.
- Don't scroll. Scrolling will break the whole thing.
- There are 2 types of fields: Free fields and taken fields. They look like this:

`x` / `o` | Taken field
---|---
[<kbd>x</kbd>](#instructions) | **Free field**

- You are `x` and you can take a field by clicking on a [<kbd>x</kbd>](#instructions) button.
- You have to take the first field.

Please press [<kbd>this button</kbd>](#calibration) to start.

<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>

###### Calibration
<kbd>[#](#f000000000)</kbd> | <kbd>[#](#f000000000)</kbd> | <kbd>[#](#f000000000)</kbd>
---|---|---
**<kbd>[#](#f000000000)</kbd>** | **<kbd>[#](#f000000000)</kbd>** | **<kbd>[#](#f000000000)</kbd>**
**<kbd>[#](#f000000000)</kbd>** | **<kbd>[#](#f000000000)</kbd>** | **<kbd>[#](#f000000000)</kbd>**

<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>

Your screen is too large. Please resize it until you don't see this text anymore.

<br><br><br><br><br><br><br><br><br><br>

###### f000000000
<kbd>[x](#f100020000)</kbd> | <kbd>[x](#f210000000)</kbd> | <kbd>[x](#f001020000)</kbd>
---|---|---
**<kbd>[x](#f200100000)</kbd>** | **<kbd>[x](#f200010000)</kbd>** | **<kbd>[x](#f002001000)</kbd>**
**<kbd>[x](#f000020100)</kbd>** | **<kbd>[x](#f020000010)</kbd>** | **<kbd>[x](#f000020001)</kbd>**

------

###### f100020000
`x` | <kbd>[x](#f112020000)</kbd> | <kbd>[x](#f121020000)</kbd>
---|---|---
**<kbd>[x](#f100120200)</kbd>** | **`o`** | **<kbd>[x](#f120021000)</kbd>**
**<kbd>[x](#f100220100)</kbd>** | **<kbd>[x](#f100220010)</kbd>** | **<kbd>[x](#f120020001)</kbd>**

------

###### f112020000
`x` | `x` | `o`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#f112220100)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f112220100
`x` | `x` | `o`
---|---|---
**`o`** | **`o`** | **<kbd>[x](#f112221120)</kbd>**
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f112221120
`x` | `x` | `o`
---|---|---
**`o`** | **`o`** | **`x`**
**`x`** | **`o`** | **<kbd>[x](#tie)</kbd>**

------

###### f121020000
`x` | `o` | `x`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#f121220010)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f121220010
`x` | `o` | `x`
---|---|---
**`o`** | **`o`** | **<kbd>[x](#f121221012)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f121221012
`x` | `o` | `x`
---|---|---
**`o`** | **`o`** | **`x`**
**<kbd>[x](#tie)</kbd>** | **`x`** | **`o`**

------

###### f100120200
`x` | <kbd>[x](#you-lost)</kbd> | <kbd>[x](#f121120200)</kbd>
---|---|---
**`x`** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`o`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f121120200
`x` | `o` | `x`
---|---|---
**`x`** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`o`** | **<kbd>[x](#f121122210)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f121122210
`x` | `o` | `x`
---|---|---
**`x`** | **`o`** | **`o`**
**`o`** | **`x`** | **<kbd>[x](#tie)</kbd>**

------

###### f120021000
`x` | `o` | <kbd>[x](#you-lost)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **`x`**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#f120021210)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f120021210
`x` | `o` | <kbd>[x](#f121021212)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **`x`**
**`o`** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f121021212
`x` | `o` | `x`
---|---|---
**<kbd>[x](#tie)</kbd>** | **`o`** | **`x`**
**`o`** | **`x`** | **`o`**

------

###### f100220100
`x` | <kbd>[x](#you-lost)</kbd> | <kbd>[x](#you-lost)</kbd>
---|---|---
**`o`** | **`o`** | **<kbd>[x](#f120221100)</kbd>**
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f120221100
`x` | `o` | <kbd>[x](#you-lost)</kbd>
---|---|---
**`o`** | **`o`** | **`x`**
**`x`** | **<kbd>[x](#f120221112)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f120221112
`x` | `o` | <kbd>[x](#tie)</kbd>
---|---|---
**`o`** | **`o`** | **`x`**
**`x`** | **`x`** | **`o`**

------

###### f100220010
`x` | <kbd>[x](#you-lost)</kbd> | <kbd>[x](#you-lost)</kbd>
---|---|---
**`o`** | **`o`** | **<kbd>[x](#f102221010)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f102221010
`x` | <kbd>[x](#you-lost)</kbd> | `o`
---|---|---
**`o`** | **`o`** | **`x`**
**<kbd>[x](#f102221112)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f102221112
`x` | <kbd>[x](#tie)</kbd> | `o`
---|---|---
**`o`** | **`o`** | **`x`**
**`x`** | **`x`** | **`o`**

------

###### f120020001
`x` | `o` | <kbd>[x](#you-lost)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#f120020211)</kbd>** | **`x`**

------

###### f120020211
`x` | `o` | <kbd>[x](#f121022211)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`o`** | **`x`** | **`x`**

------

###### f121022211
`x` | `o` | `x`
---|---|---
**<kbd>[x](#tie)</kbd>** | **`o`** | **`o`**
**`o`** | **`x`** | **`x`**

------

###### f210000000
`o` | `x` | <kbd>[x](#f211200000)</kbd>
---|---|---
**<kbd>[x](#f210120000)</kbd>** | **<kbd>[x](#f210010020)</kbd>** | **<kbd>[x](#f210021000)</kbd>**
**<kbd>[x](#f210020100)</kbd>** | **<kbd>[x](#f210020010)</kbd>** | **<kbd>[x](#f210020001)</kbd>**

------

###### f211200000
`o` | `x` | `x`
---|---|---
**`o`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#f211220100)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f211220100
`o` | `x` | `x`
---|---|---
**`o`** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f210120000
`o` | `x` | <kbd>[x](#you-lost)</kbd>
---|---|---
**`x`** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#f212120001)</kbd>**

------

###### f212120001
`o` | `x` | `o`
---|---|---
**`x`** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#f212120121)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**

------

###### f212120121
`o` | `x` | `o`
---|---|---
**`x`** | **`o`** | **<kbd>[x](#tie)</kbd>**
**`x`** | **`o`** | **`x`**

------

###### f210010020
`o` | `x` | <kbd>[x](#f211010220)</kbd>
---|---|---
**<kbd>[x](#f210112020)</kbd>** | **`x`** | **<kbd>[x](#f210211020)</kbd>**
**<kbd>[x](#f212010120)</kbd>** | **`o`** | **<kbd>[x](#f212010021)</kbd>**

------

###### f211010220
`o` | `x` | `x`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**
**`o`** | **`o`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f210112020
`o` | `x` | <kbd>[x](#f211112220)</kbd>
---|---|---
**`x`** | **`x`** | **`o`**
**<kbd>[x](#f212112120)</kbd>** | **`o`** | **<kbd>[x](#f212112021)</kbd>**

------

###### f211112220
`o` | `x` | `x`
---|---|---
**`x`** | **`x`** | **`o`**
**`o`** | **`o`** | **<kbd>[x](#tie)</kbd>**

------

###### f212112120
`o` | `x` | `o`
---|---|---
**`x`** | **`x`** | **`o`**
**`x`** | **`o`** | **<kbd>[x](#tie)</kbd>**

------

###### f212112021
`o` | `x` | `o`
---|---|---
**`x`** | **`x`** | **`o`**
**<kbd>[x](#tie)</kbd>** | **`o`** | **`x`**

------

###### f210211020
`o` | `x` | <kbd>[x](#you-lost)</kbd>
---|---|---
**`o`** | **`x`** | **`x`**
**<kbd>[x](#f212211120)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f212211120
`o` | `x` | `o`
---|---|---
**`o`** | **`x`** | **`x`**
**`x`** | **`o`** | **<kbd>[x](#tie)</kbd>**

------

###### f212010120
`o` | `x` | `o`
---|---|---
**<kbd>[x](#f212112120)</kbd>** | **`x`** | **<kbd>[x](#f212211120)</kbd>**
**`x`** | **`o`** | **<kbd>[x](#f212210121)</kbd>**

------

###### f212210121
`o` | `x` | `o`
---|---|---
**`o`** | **`x`** | **<kbd>[x](#tie)</kbd>**
**`x`** | **`o`** | **`x`**

------

###### f212010021
`o` | `x` | `o`
---|---|---
**<kbd>[x](#f212112021)</kbd>** | **`x`** | **<kbd>[x](#f212211021)</kbd>**
**<kbd>[x](#f212210121)</kbd>** | **`o`** | **`x`**

------

###### f212211021
`o` | `x` | `o`
---|---|---
**`o`** | **`x`** | **`x`**
**<kbd>[x](#tie)</kbd>** | **`o`** | **`x`**

------

###### f210021000
`o` | `x` | <kbd>[x](#you-lost)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **`x`**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#f212021001)</kbd>**

------

###### f212021001
`o` | `x` | `o`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **`x`**
**<kbd>[x](#f212021121)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**

------

###### f212021121
`o` | `x` | `o`
---|---|---
**<kbd>[x](#tie)</kbd>** | **`o`** | **`x`**
**`x`** | **`o`** | **`x`**

------

###### f210020100
`o` | `x` | <kbd>[x](#you-lost)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#f210020121)</kbd>**

------

###### f210020121
`o` | `x` | <kbd>[x](#f211022121)</kbd>
---|---|---
**<kbd>[x](#f212120121)</kbd>** | **`o`** | **<kbd>[x](#f212021121)</kbd>**
**`x`** | **`o`** | **`x`**

------

###### f211022121
`o` | `x` | `x`
---|---|---
**<kbd>[x](#tie)</kbd>** | **`o`** | **`o`**
**`x`** | **`o`** | **`x`**

------

###### f210020010
`o` | `x` | <kbd>[x](#you-lost)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#f210020211)</kbd>**

------

###### f210020211
`o` | `x` | <kbd>[x](#you-lost)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`o`** | **`x`** | **`x`**

------

###### f210020001
`o` | `x` | <kbd>[x](#f211022001)</kbd>
---|---|---
**<kbd>[x](#f212120001)</kbd>** | **`o`** | **<kbd>[x](#f212021001)</kbd>**
**<kbd>[x](#f210020121)</kbd>** | **<kbd>[x](#f210020211)</kbd>** | **`x`**

------

###### f211022001
`o` | `x` | `x`
---|---|---
**<kbd>[x](#f211122201)</kbd>** | **`o`** | **`o`**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**

------

###### f211122201
`o` | `x` | `x`
---|---|---
**`x`** | **`o`** | **`o`**
**`o`** | **<kbd>[x](#tie)</kbd>** | **`x`**

------

###### f001020000
<kbd>[x](#f121020000)</kbd> | <kbd>[x](#f211020000)</kbd> | `x`
---|---|---
**<kbd>[x](#f201120000)</kbd>** | **`o`** | **<kbd>[x](#f001021002)</kbd>**
**<kbd>[x](#f021020100)</kbd>** | **<kbd>[x](#f001220010)</kbd>** | **<kbd>[x](#f001022001)</kbd>**

------

###### f211020000
`o` | `x` | `x`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#f211022001)</kbd>**

------

###### f201120000
`o` | <kbd>[x](#you-lost)</kbd> | `x`
---|---|---
**`x`** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#f201122001)</kbd>**

------

###### f201122001
`o` | <kbd>[x](#f211122201)</kbd> | `x`
---|---|---
**`x`** | **`o`** | **`o`**
**<kbd>[x](#f201122121)</kbd>** | **<kbd>[x](#f201122211)</kbd>** | **`x`**

------

###### f201122121
`o` | <kbd>[x](#tie)</kbd> | `x`
---|---|---
**`x`** | **`o`** | **`o`**
**`x`** | **`o`** | **`x`**

------

###### f201122211
`o` | <kbd>[x](#tie)</kbd> | `x`
---|---|---
**`x`** | **`o`** | **`o`**
**`o`** | **`x`** | **`x`**

------

###### f001021002
<kbd>[x](#f121021002)</kbd> | <kbd>[x](#you-lost)</kbd> | `x`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **`x`**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`o`**

------

###### f121021002
`x` | `o` | `x`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **`x`**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#f121221012)</kbd>** | **`o`**

------

###### f021020100
<kbd>[x](#you-lost)</kbd> | `o` | `x`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`x`** | **<kbd>[x](#f021020112)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f021020112
<kbd>[x](#f121220112)</kbd> | `o` | `x`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`x`** | **`x`** | **`o`**

------

###### f121220112
`x` | `o` | `x`
---|---|---
**`o`** | **`o`** | **<kbd>[x](#tie)</kbd>**
**`x`** | **`x`** | **`o`**

------

###### f001220010
<kbd>[x](#you-lost)</kbd> | <kbd>[x](#you-lost)</kbd> | `x`
---|---|---
**`o`** | **`o`** | **<kbd>[x](#f001221012)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f001221012
<kbd>[x](#f121221012)</kbd> | <kbd>[x](#you-lost)</kbd> | `x`
---|---|---
**`o`** | **`o`** | **`x`**
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **`o`**

------

###### f001022001
<kbd>[x](#you-lost)</kbd> | <kbd>[x](#you-lost)</kbd> | `x`
---|---|---
**<kbd>[x](#f201122001)</kbd>** | **`o`** | **`o`**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**

------

###### f200100000
`o` | <kbd>[x](#f210120000)</kbd> | <kbd>[x](#f201120000)</kbd>
---|---|---
**`x`** | **<kbd>[x](#f200112000)</kbd>** | **<kbd>[x](#f200121000)</kbd>**
**<kbd>[x](#f220100100)</kbd>** | **<kbd>[x](#f202100010)</kbd>** | **<kbd>[x](#f202100001)</kbd>**

------

###### f200112000
`o` | <kbd>[x](#f210112020)</kbd> | <kbd>[x](#f201112200)</kbd>
---|---|---
**`x`** | **`x`** | **`o`**
**<kbd>[x](#f202112100)</kbd>** | **<kbd>[x](#f220112010)</kbd>** | **<kbd>[x](#f220112001)</kbd>**

------

###### f201112200
`o` | <kbd>[x](#f211112220)</kbd> | `x`
---|---|---
**`x`** | **`x`** | **`o`**
**`o`** | **<kbd>[x](#f221112210)</kbd>** | **<kbd>[x](#f221112201)</kbd>**

------

###### f221112210
`o` | `o` | `x`
---|---|---
**`x`** | **`x`** | **`o`**
**`o`** | **`x`** | **<kbd>[x](#tie)</kbd>**

------

###### f221112201
`o` | `o` | `x`
---|---|---
**`x`** | **`x`** | **`o`**
**`o`** | **<kbd>[x](#tie)</kbd>** | **`x`**

------

###### f202112100
`o` | <kbd>[x](#you-lost)</kbd> | `o`
---|---|---
**`x`** | **`x`** | **`o`**
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f220112010
`o` | `o` | <kbd>[x](#f221112210)</kbd>
---|---|---
**`x`** | **`x`** | **`o`**
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f220112001
`o` | `o` | <kbd>[x](#f221112201)</kbd>
---|---|---
**`x`** | **`x`** | **`o`**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**

------

###### f200121000
`o` | <kbd>[x](#you-lost)</kbd> | <kbd>[x](#you-lost)</kbd>
---|---|---
**`x`** | **`o`** | **`x`**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#f202121001)</kbd>**

------

###### f202121001
`o` | <kbd>[x](#you-lost)</kbd> | `o`
---|---|---
**`x`** | **`o`** | **`x`**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**

------

###### f220100100
`o` | `o` | <kbd>[x](#f221120100)</kbd>
---|---|---
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f221120100
`o` | `o` | `x`
---|---|---
**`x`** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f202100010
`o` | <kbd>[x](#f212120010)</kbd> | `o`
---|---|---
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f212120010
`o` | `x` | `o`
---|---|---
**`x`** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f202100001
`o` | <kbd>[x](#f212120001)</kbd> | `o`
---|---|---
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**

------

###### f200010000
`o` | <kbd>[x](#f210010020)</kbd> | <kbd>[x](#f201010200)</kbd>
---|---|---
**<kbd>[x](#f200112000)</kbd>** | **`x`** | **<kbd>[x](#f200211000)</kbd>**
**<kbd>[x](#f202010100)</kbd>** | **<kbd>[x](#f220010010)</kbd>** | **<kbd>[x](#f202010001)</kbd>**

------

###### f201010200
`o` | <kbd>[x](#you-lost)</kbd> | `x`
---|---|---
**<kbd>[x](#f201112200)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**
**`o`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f200211000
`o` | <kbd>[x](#you-lost)</kbd> | <kbd>[x](#you-lost)</kbd>
---|---|---
**`o`** | **`x`** | **`x`**
**<kbd>[x](#f202211100)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f202211100
`o` | <kbd>[x](#f212211120)</kbd> | `o`
---|---|---
**`o`** | **`x`** | **`x`**
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f202010100
`o` | <kbd>[x](#f212010120)</kbd> | `o`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f220010010
`o` | `o` | <kbd>[x](#f221010210)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f221010210
`o` | `o` | `x`
---|---|---
**<kbd>[x](#f221112210)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**
**`o`** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f202010001
`o` | <kbd>[x](#f212010021)</kbd> | `o`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**

------

###### f002001000
<kbd>[x](#f102201000)</kbd> | <kbd>[x](#f012201000)</kbd> | `o`
---|---|---
**<kbd>[x](#f002121000)</kbd>** | **<kbd>[x](#f002211000)</kbd>** | **`x`**
**<kbd>[x](#f202001100)</kbd>** | **<kbd>[x](#f202001010)</kbd>** | **<kbd>[x](#f202001001)</kbd>**

------

###### f102201000
`x` | <kbd>[x](#f112221000)</kbd> | `o`
---|---|---
**`o`** | **<kbd>[x](#f102211002)</kbd>** | **`x`**
**<kbd>[x](#f102221100)</kbd>** | **<kbd>[x](#f102221010)</kbd>** | **<kbd>[x](#f102221001)</kbd>**

------

###### f112221000
`x` | `x` | `o`
---|---|---
**`o`** | **`o`** | **`x`**
**<kbd>[x](#f112221120)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f102211002
`x` | <kbd>[x](#f112211022)</kbd> | `o`
---|---|---
**`o`** | **`x`** | **`x`**
**<kbd>[x](#f122211102)</kbd>** | **<kbd>[x](#f122211012)</kbd>** | **`o`**

------

###### f112211022
`x` | `x` | `o`
---|---|---
**`o`** | **`x`** | **`x`**
**<kbd>[x](#tie)</kbd>** | **`o`** | **`o`**

------

###### f122211102
`x` | `o` | `o`
---|---|---
**`o`** | **`x`** | **`x`**
**`x`** | **<kbd>[x](#tie)</kbd>** | **`o`**

------

###### f122211012
`x` | `o` | `o`
---|---|---
**`o`** | **`x`** | **`x`**
**<kbd>[x](#tie)</kbd>** | **`x`** | **`o`**

------

###### f102221100
`x` | <kbd>[x](#f112221120)</kbd> | `o`
---|---|---
**`o`** | **`o`** | **`x`**
**`x`** | **<kbd>[x](#f102221112)</kbd>** | **<kbd>[x](#f102221121)</kbd>**

------

###### f102221121
`x` | <kbd>[x](#tie)</kbd> | `o`
---|---|---
**`o`** | **`o`** | **`x`**
**`x`** | **`o`** | **`x`**

------

###### f102221001
`x` | <kbd>[x](#you-lost)</kbd> | `o`
---|---|---
**`o`** | **`o`** | **`x`**
**<kbd>[x](#f102221121)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**

------

###### f012201000
<kbd>[x](#f112221000)</kbd> | `x` | `o`
---|---|---
**`o`** | **<kbd>[x](#f012211020)</kbd>** | **`x`**
**<kbd>[x](#f012221100)</kbd>** | **<kbd>[x](#f012221010)</kbd>** | **<kbd>[x](#f212201001)</kbd>**

------

###### f012211020
<kbd>[x](#f112211022)</kbd> | `x` | `o`
---|---|---
**`o`** | **`x`** | **`x`**
**<kbd>[x](#f212211120)</kbd>** | **`o`** | **<kbd>[x](#f212211021)</kbd>**

------

###### f012221100
<kbd>[x](#f112221120)</kbd> | `x` | `o`
---|---|---
**`o`** | **`o`** | **`x`**
**`x`** | **<kbd>[x](#f012221112)</kbd>** | **<kbd>[x](#f012221121)</kbd>**

------

###### f012221112
<kbd>[x](#tie)</kbd> | `x` | `o`
---|---|---
**`o`** | **`o`** | **`x`**
**`x`** | **`x`** | **`o`**

------

###### f012221121
<kbd>[x](#tie)</kbd> | `x` | `o`
---|---|---
**`o`** | **`o`** | **`x`**
**`x`** | **`o`** | **`x`**

------

###### f012221010
<kbd>[x](#you-lost)</kbd> | `x` | `o`
---|---|---
**`o`** | **`o`** | **`x`**
**<kbd>[x](#f012221112)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f212201001
`o` | `x` | `o`
---|---|---
**`o`** | **<kbd>[x](#you-lost)</kbd>** | **`x`**
**<kbd>[x](#f212201121)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**

------

###### f212201121
`o` | `x` | `o`
---|---|---
**`o`** | **<kbd>[x](#tie)</kbd>** | **`x`**
**`x`** | **`o`** | **`x`**

------

###### f002121000
<kbd>[x](#you-lost)</kbd> | <kbd>[x](#you-lost)</kbd> | `o`
---|---|---
**`x`** | **`o`** | **`x`**
**<kbd>[x](#f202121100)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f202121100
`o` | <kbd>[x](#you-lost)</kbd> | `o`
---|---|---
**`x`** | **`o`** | **`x`**
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f002211000
<kbd>[x](#f102211002)</kbd> | <kbd>[x](#f012211020)</kbd> | `o`
---|---|---
**`o`** | **`x`** | **`x`**
**<kbd>[x](#f202211100)</kbd>** | **<kbd>[x](#f022211010)</kbd>** | **<kbd>[x](#f202211001)</kbd>**

------

###### f022211010
<kbd>[x](#f122211012)</kbd> | `o` | `o`
---|---|---
**`o`** | **`x`** | **`x`**
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f202211001
`o` | <kbd>[x](#you-lost)</kbd> | `o`
---|---|---
**`o`** | **`x`** | **`x`**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**

------

###### f202001100
`o` | <kbd>[x](#f212021100)</kbd> | `o`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f212021100
`o` | `x` | `o`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **`x`**
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#f212021121)</kbd>**

------

###### f202001010
`o` | <kbd>[x](#f212021010)</kbd> | `o`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f212021010
`o` | `x` | `o`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **`x`**
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f202001001
`o` | <kbd>[x](#f212201001)</kbd> | `o`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**

------

###### f000020100
<kbd>[x](#f100220100)</kbd> | <kbd>[x](#f210020100)</kbd> | <kbd>[x](#f021020100)</kbd>
---|---|---
**<kbd>[x](#f200120100)</kbd>** | **`o`** | **<kbd>[x](#f020021100)</kbd>**
**`x`** | **<kbd>[x](#f000020112)</kbd>** | **<kbd>[x](#f000020121)</kbd>**

------

###### f200120100
`o` | <kbd>[x](#you-lost)</kbd> | <kbd>[x](#you-lost)</kbd>
---|---|---
**`x`** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#f200120121)</kbd>**

------

###### f200120121
`o` | <kbd>[x](#f212120121)</kbd> | <kbd>[x](#you-lost)</kbd>
---|---|---
**`x`** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`x`** | **`o`** | **`x`**

------

###### f020021100
<kbd>[x](#you-lost)</kbd> | `o` | <kbd>[x](#you-lost)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **`x`**
**`x`** | **<kbd>[x](#f020021112)</kbd>** | **<kbd>[x](#you-lost)</kbd>**

------

###### f020021112
<kbd>[x](#f120221112)</kbd> | `o` | <kbd>[x](#you-lost)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **`x`**
**`x`** | **`x`** | **`o`**

------

###### f000020112
<kbd>[x](#f100220112)</kbd> | <kbd>[x](#you-lost)</kbd> | <kbd>[x](#you-lost)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`x`** | **`x`** | **`o`**

------

###### f100220112
`x` | <kbd>[x](#you-lost)</kbd> | <kbd>[x](#you-lost)</kbd>
---|---|---
**`o`** | **`o`** | **<kbd>[x](#f120221112)</kbd>**
**`x`** | **`x`** | **`o`**

------

###### f000020121
<kbd>[x](#you-lost)</kbd> | <kbd>[x](#f210020121)</kbd> | <kbd>[x](#you-lost)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`x`** | **`o`** | **`x`**

------

###### f020000010
<kbd>[x](#f120000210)</kbd> | `o` | <kbd>[x](#f021000210)</kbd>
---|---|---
**<kbd>[x](#f020100210)</kbd>** | **<kbd>[x](#f220010010)</kbd>** | **<kbd>[x](#f020001210)</kbd>**
**<kbd>[x](#f020000112)</kbd>** | **`x`** | **<kbd>[x](#f020000211)</kbd>**

------

###### f120000210
`x` | `o` | <kbd>[x](#f121020210)</kbd>
---|---|---
**<kbd>[x](#f120120210)</kbd>** | **<kbd>[x](#f120010212)</kbd>** | **<kbd>[x](#f120021210)</kbd>**
**`o`** | **`x`** | **<kbd>[x](#f120020211)</kbd>**

------

###### f121020210
`x` | `o` | `x`
---|---|---
**<kbd>[x](#f121122210)</kbd>** | **`o`** | **<kbd>[x](#f121021212)</kbd>**
**`o`** | **`x`** | **<kbd>[x](#f121022211)</kbd>**

------

###### f120120210
`x` | `o` | <kbd>[x](#f121122210)</kbd>
---|---|---
**`x`** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`o`** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f120010212
`x` | `o` | <kbd>[x](#f121210212)</kbd>
---|---|---
**<kbd>[x](#f120112212)</kbd>** | **`x`** | **<kbd>[x](#f120211212)</kbd>**
**`o`** | **`x`** | **`o`**

------

###### f121210212
`x` | `o` | `x`
---|---|---
**`o`** | **`x`** | **<kbd>[x](#tie)</kbd>**
**`o`** | **`x`** | **`o`**

------

###### f120112212
`x` | `o` | <kbd>[x](#tie)</kbd>
---|---|---
**`x`** | **`x`** | **`o`**
**`o`** | **`x`** | **`o`**

------

###### f120211212
`x` | `o` | <kbd>[x](#tie)</kbd>
---|---|---
**`o`** | **`x`** | **`x`**
**`o`** | **`x`** | **`o`**

------

###### f021000210
<kbd>[x](#f121020210)</kbd> | `o` | `x`
---|---|---
**<kbd>[x](#f021120210)</kbd>** | **<kbd>[x](#f221010210)</kbd>** | **<kbd>[x](#f021001212)</kbd>**
**`o`** | **`x`** | **<kbd>[x](#f021002211)</kbd>**

------

###### f021120210
<kbd>[x](#f121122210)</kbd> | `o` | `x`
---|---|---
**`x`** | **`o`** | **<kbd>[x](#f021121212)</kbd>**
**`o`** | **`x`** | **<kbd>[x](#f021122211)</kbd>**

------

###### f021121212
<kbd>[x](#tie)</kbd> | `o` | `x`
---|---|---
**`x`** | **`o`** | **`x`**
**`o`** | **`x`** | **`o`**

------

###### f021122211
<kbd>[x](#tie)</kbd> | `o` | `x`
---|---|---
**`x`** | **`o`** | **`o`**
**`o`** | **`x`** | **`x`**

------

###### f021001212
<kbd>[x](#f121201212)</kbd> | `o` | `x`
---|---|---
**<kbd>[x](#f021121212)</kbd>** | **<kbd>[x](#f021211212)</kbd>** | **`x`**
**`o`** | **`x`** | **`o`**

------

###### f121201212
`x` | `o` | `x`
---|---|---
**`o`** | **<kbd>[x](#tie)</kbd>** | **`x`**
**`o`** | **`x`** | **`o`**

------

###### f021211212
<kbd>[x](#tie)</kbd> | `o` | `x`
---|---|---
**`o`** | **`x`** | **`x`**
**`o`** | **`x`** | **`o`**

------

###### f021002211
<kbd>[x](#f121022211)</kbd> | `o` | `x`
---|---|---
**<kbd>[x](#f221102211)</kbd>** | **<kbd>[x](#f221012211)</kbd>** | **`o`**
**`o`** | **`x`** | **`x`**

------

###### f221102211
`o` | `o` | `x`
---|---|---
**`x`** | **<kbd>[x](#tie)</kbd>** | **`o`**
**`o`** | **`x`** | **`x`**

------

###### f221012211
`o` | `o` | `x`
---|---|---
**<kbd>[x](#tie)</kbd>** | **`x`** | **`o`**
**`o`** | **`x`** | **`x`**

------

###### f020100210
<kbd>[x](#f120120210)</kbd> | `o` | <kbd>[x](#f021120210)</kbd>
---|---|---
**`x`** | **<kbd>[x](#f020112210)</kbd>** | **<kbd>[x](#f020121210)</kbd>**
**`o`** | **`x`** | **<kbd>[x](#f220100211)</kbd>**

------

###### f020112210
<kbd>[x](#f120112212)</kbd> | `o` | <kbd>[x](#f221112210)</kbd>
---|---|---
**`x`** | **`x`** | **`o`**
**`o`** | **`x`** | **<kbd>[x](#f220112211)</kbd>**

------

###### f220112211
`o` | `o` | <kbd>[x](#tie)</kbd>
---|---|---
**`x`** | **`x`** | **`o`**
**`o`** | **`x`** | **`x`**

------

###### f020121210
<kbd>[x](#you-lost)</kbd> | `o` | <kbd>[x](#f021121212)</kbd>
---|---|---
**`x`** | **`o`** | **`x`**
**`o`** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f220100211
`o` | `o` | <kbd>[x](#f221102211)</kbd>
---|---|---
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**
**`o`** | **`x`** | **`x`**

------

###### f020001210
<kbd>[x](#f120021210)</kbd> | `o` | <kbd>[x](#f021001212)</kbd>
---|---|---
**<kbd>[x](#f020121210)</kbd>** | **<kbd>[x](#f020211210)</kbd>** | **`x`**
**`o`** | **`x`** | **<kbd>[x](#f022001211)</kbd>**

------

###### f020211210
<kbd>[x](#f120211212)</kbd> | `o` | <kbd>[x](#you-lost)</kbd>
---|---|---
**`o`** | **`x`** | **`x`**
**`o`** | **`x`** | **<kbd>[x](#you-lost)</kbd>**

------

###### f022001211
<kbd>[x](#you-lost)</kbd> | `o` | `o`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**
**`o`** | **`x`** | **`x`**

------

###### f020000112
<kbd>[x](#f120200112)</kbd> | `o` | <kbd>[x](#f021020112)</kbd>
---|---|---
**<kbd>[x](#f220100112)</kbd>** | **<kbd>[x](#f022010112)</kbd>** | **<kbd>[x](#f220001112)</kbd>**
**`x`** | **`x`** | **`o`**

------

###### f120200112
`x` | `o` | <kbd>[x](#f121220112)</kbd>
---|---|---
**`o`** | **<kbd>[x](#f122210112)</kbd>** | **<kbd>[x](#f122201112)</kbd>**
**`x`** | **`x`** | **`o`**

------

###### f122210112
`x` | `o` | `o`
---|---|---
**`o`** | **`x`** | **<kbd>[x](#tie)</kbd>**
**`x`** | **`x`** | **`o`**

------

###### f122201112
`x` | `o` | `o`
---|---|---
**`o`** | **<kbd>[x](#tie)</kbd>** | **`x`**
**`x`** | **`x`** | **`o`**

------

###### f220100112
`o` | `o` | <kbd>[x](#you-lost)</kbd>
---|---|---
**`x`** | **<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>**
**`x`** | **`x`** | **`o`**

------

###### f022010112
<kbd>[x](#you-lost)</kbd> | `o` | `o`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**
**`x`** | **`x`** | **`o`**

------

###### f220001112
`o` | `o` | <kbd>[x](#you-lost)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**
**`x`** | **`x`** | **`o`**

------

###### f020000211
<kbd>[x](#f120020211)</kbd> | `o` | <kbd>[x](#f021002211)</kbd>
---|---|---
**<kbd>[x](#f220100211)</kbd>** | **<kbd>[x](#f220010211)</kbd>** | **<kbd>[x](#f022001211)</kbd>**
**`o`** | **`x`** | **`x`**

------

###### f220010211
`o` | `o` | <kbd>[x](#you-lost)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`x`** | **<kbd>[x](#you-lost)</kbd>**
**`o`** | **`x`** | **`x`**

------

###### f000020001
<kbd>[x](#f120020001)</kbd> | <kbd>[x](#f210020001)</kbd> | <kbd>[x](#f001022001)</kbd>
---|---|---
**<kbd>[x](#f200120001)</kbd>** | **`o`** | **<kbd>[x](#f002021001)</kbd>**
**<kbd>[x](#f000020121)</kbd>** | **<kbd>[x](#f000020211)</kbd>** | **`x`**

------

###### f200120001
`o` | <kbd>[x](#f212120001)</kbd> | <kbd>[x](#f201122001)</kbd>
---|---|---
**`x`** | **`o`** | **<kbd>[x](#f202121001)</kbd>**
**<kbd>[x](#f200120121)</kbd>** | **<kbd>[x](#f200120211)</kbd>** | **`x`**

------

###### f200120211
`o` | <kbd>[x](#you-lost)</kbd> | <kbd>[x](#f201122211)</kbd>
---|---|---
**`x`** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`o`** | **`x`** | **`x`**

------

###### f002021001
<kbd>[x](#you-lost)</kbd> | <kbd>[x](#you-lost)</kbd> | `o`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **`x`**
**<kbd>[x](#f002021121)</kbd>** | **<kbd>[x](#you-lost)</kbd>** | **`x`**

------

###### f002021121
<kbd>[x](#you-lost)</kbd> | <kbd>[x](#f212021121)</kbd> | `o`
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **`x`**
**`x`** | **`o`** | **`x`**

------

###### f000020211
<kbd>[x](#you-lost)</kbd> | <kbd>[x](#you-lost)</kbd> | <kbd>[x](#f001022211)</kbd>
---|---|---
**<kbd>[x](#you-lost)</kbd>** | **`o`** | **<kbd>[x](#you-lost)</kbd>**
**`o`** | **`x`** | **`x`**

------

###### f001022211
<kbd>[x](#you-lost)</kbd> | <kbd>[x](#you-lost)</kbd> | `x`
---|---|---
**<kbd>[x](#f201122211)</kbd>** | **`o`** | **`o`**
**`o`** | **`x`** | **`x`**

------



<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>

# You lost

Wow! You seriously just lost a game of Tic Tac Toe against a static markdown file. You can [<kbd>Play again</kbd>](#calibration) or you can [<kbd>Go to the top</kbd>](#marktactoe). Oh and leave a star!

<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>

# Tie

Congratulations! You didn't lose against a static markdown file. You can [<kbd>Play again</kbd>](#calibration) or you can [<kbd>Go to the top</kbd>](#marktactoe). Oh and leave a star!

<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
