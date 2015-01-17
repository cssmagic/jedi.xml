# Jedi.xml

> Jedi file-type-config for JetBrains' web IDEs.

#### 前提

* 本项目适用于 WebStorm 和 PhpStorm，以下说明以这两款 IDE 为准。
* 理论上也适用于 JetBrains 出品的其它 IDE，但没有测试过。

#### 安装

1. Fork 本项目并克隆到本地（或 [单独下载](https://raw.githubusercontent.com/cssmagic/jedi.xml/master/jedi.xml) 最新版的 `jedi.xml` 文件）。

2. 检查你的操作系统类型，把 `jedi.xml` 文件复制到以下相应路径（如果已存在同名文件则覆盖）：
    * Mac OS X： `~/Library/Preferences/WebIde{version}/filetypes`
    * Windows 7： `C:\Users\{your_name}\.WebIde{version}\config\filetypes`
    * Windows XP： `C:\Documents and Settings\{your_name}\.WebIde{version}\config\filetypes`

3. 重新启动 IDE，即可。

#### 后续设置

1. 进入 IDE 的 `Preference` → `Editor` → `Colors & Fonts` 面板。

2. 根据你自己的喜好，调整 `General`、`Language Defaults` 和 `Custom` 的设置，以获得更好的代码着色效果。

***

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
