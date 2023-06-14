(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{777:function(e,s,t){"use strict";t.r(s);var r=t(2),a=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"管理密钥和证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理密钥和证书"}},[e._v("#")]),e._v(" 管理密钥和证书")]),e._v(" "),s("h1",{attrs:{id:"使用keytool-生成证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用keytool-生成证书"}},[e._v("#")]),e._v(" "),s("a",{attrs:{href:"https://www.cnblogs.com/littleatp/p/5922362.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用keytool 生成证书"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"keytool-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keytool-简介"}},[e._v("#")]),e._v(" keytool 简介")]),e._v(" "),s("p",[e._v("keytool 是java 用于管理密钥和证书的工具，"),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/tools/windows/keytool.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),s("OutboundLink")],1),e._v("\n其功能包括：")]),e._v(" "),s("ul",[s("li",[e._v("创建并管理密钥")]),e._v(" "),s("li",[e._v("创建并管理证书")]),e._v(" "),s("li",[e._v("作为CA 为证书授权")]),e._v(" "),s("li",[e._v("导入导出证书")])]),e._v(" "),s("p",[s("strong",[e._v("主要格式")]),e._v("\nkeytool 采用 keystore 文件来存储密钥及证书，其中可包括私钥、信任证书；\nkeystore 文件主要使用 JKS格式(也可支持其他格式)，带密钥存储；其中私钥的存储也有独立的密码；\n"),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#KeyStore",target:"_blank",rel:"noopener noreferrer"}},[e._v("其他格式"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"一、生成私钥和证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、生成私钥和证书"}},[e._v("#")]),e._v(" 一、生成私钥和证书")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("keytool -genkeypair -alias serverkey -keystore server.keystore\n")])])]),s("p",[e._v("按提示 输入keystore 存储密码、私钥密码、个人信息，之后会生成 server.keystore文件\n若不想输入参数，可提供参数：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('keytool -genkeypair -alias serverkey -keypass 111111 -storepass 111111 \\\n    -dname "C=CN,ST=GD,L=SZ,O=vihoo,OU=dev,CN=vihoo.com" \\\n    -keyalg RSA -keysize 2048 -validity 3650 -keystore server.keystore\n')])])]),s("p",[s("strong",[e._v("参数说明")])]),e._v(" "),s("ul",[s("li",[e._v("storepass keystore 文件存储密码")]),e._v(" "),s("li",[e._v("keypass 私钥加解密密码")]),e._v(" "),s("li",[e._v("alias 实体别名(包括证书私钥)")]),e._v(" "),s("li",[e._v("dname 证书个人信息")]),e._v(" "),s("li",[e._v("keyalt 采用公钥算法，默认是DSA")]),e._v(" "),s("li",[e._v("keysize 密钥长度(DSA算法对应的默认算法是sha1withDSA，不支持2048长度，此时需指定RSA)")]),e._v(" "),s("li",[e._v("validity 有效期")]),e._v(" "),s("li",[e._v("keystore 指定keystore文件")])]),e._v(" "),s("h2",{attrs:{id:"二、查看keystore详情"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、查看keystore详情"}},[e._v("#")]),e._v(" 二、查看keystore详情")]),e._v(" "),s("p",[e._v("查看详情命令")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("keytool -list -keystore -storepass 111111 server.keystore\n")])])]),s("p",[e._v("输出结果")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Keystore type: JKS\nKeystore provider: SUN\nYour keystore contains 1 entry\nserverkey, Sep 25, 2016, PrivateKeyEntry, \nCertificate fingerprint (SHA1): 65:75:C9:08:A0:83:21:A1:D7:8D:DA:CD:3D:FB:C2:E0:50:96:29:62\n")])])]),s("p",[e._v("加上-v选项可查看更详细信息")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Keystore type: JKS\nKeystore provider: SUN\nYour keystore contains 1 entry\nAlias name: serverkey\nCreation date: Jul 22, 2017\nEntry type: PrivateKeyEntry\nCertificate chain length: 1\nCertificate[1]:\nOwner: C=CN, ST=GD, L=SZ, O=vihoo, OU=dev, CN=vihoo.com\nIssuer: C=CN, ST=GD, L=SZ, O=vihoo, OU=dev, CN=vihoo.com\nSerial number: 5c5eb42\nValid from: Sat Jul 22 10:45:45 CST 2017 until: Tue Jul 20 10:45:45 CST 2027\nCertificate fingerprints:\n     MD5:  27:ED:70:EF:4C:E3:7F:ED:6A:83:67:32:6D:10:24:38\n     SHA1: 79:08:97:6E:62:EE:0F:E6:81:56:66:43:9C:9D:A4:11:EF:CC:28:0C\n     SHA256: 3B:AC:56:8E:60:C2:C8:07:61:19:C7:4A:D3:AF:1F:60:77:24:94:7C:87:6E:C8:E7:17:14:E4:7A:34:0A:CD:8F\n     Signature algorithm name: SHA256withRSA\n     Version: 3\nExtensions: \n#1: ObjectId: 2.5.29.14 Criticality=false\nSubjectKeyIdentifier [\nKeyIdentifier [\n0000: B4 10 A9 26 5D 6C 4C 46   B4 69 ED 31 2B 20 D1 F4  ...&]lLF.i.1+ ..\n0010: 58 3C 8F 94                                        X<..\n]\n]\n")])])]),s("h2",{attrs:{id:"三、证书导入导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、证书导入导出"}},[e._v("#")]),e._v(" 三、证书导入导出")]),e._v(" "),s("p",[s("strong",[e._v("导出证书")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("keytool -exportcert -keystore server.keystore -file server.cer -alias serverkey -storepass 111111\n")])])]),s("p",[e._v("*"),s("strong",[e._v("参数说明*")])]),e._v(" "),s("ul",[s("li",[e._v("exportcert 表示导出证书")]),e._v(" "),s("li",[e._v("alias 指示别名")]),e._v(" "),s("li",[e._v("file 指示导出文件")]),e._v(" "),s("li",[e._v("storepass 指示keystore密钥")])]),e._v(" "),s("p",[e._v("此时导出的证书为DER编码格式，使用openssl 可以输出")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("openssl x509 -in server.cer -inform der -noout -text\n")])])]),s("p",[e._v("加上 -rfc选项，可输出PEM编码格式的证书")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("keytool -exportcert -keystore server.keystore -rfc -file server.cer -alias serverkey -storepass 111111\n")])])]),s("p",[e._v("输出格式如：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("-----BEGIN CERTIFICATE-----\nMIIDUTCCAjmgAwIBAgIEBcXrQjANBgkqhkiG9w0BAQsFADBZMRIwEAYDVQQDEwl2\n...\n-----END CERTIFICATE-----\n")])])]),s("p",[s("strong",[e._v("导入证书")]),e._v("\n一般为导入信任证书(SSL客户端使用)")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("keytool -importcert -keystore client_trust.keystore -file server.cer -alias client_trust_server -storepass 111111 -noprompt\n")])])]),s("p",[e._v("*"),s("strong",[e._v("参数说明*")])]),e._v(" "),s("ul",[s("li",[e._v("importcert 表示导入信任证书")]),e._v(" "),s("li",[e._v("file 指示导入证书，支持pem/der格式")]),e._v(" "),s("li",[e._v("keystore 指示目标keystore文件")]),e._v(" "),s("li",[e._v("storepass 指示新的keystore密钥")]),e._v(" "),s("li",[e._v("alias 指示trust证书在keystore中的别名")]),e._v(" "),s("li",[e._v("noprompt 指示不弹出提示")])]),e._v(" "),s("p",[e._v("导入后的证书为 "),s("strong",[e._v("trustedCertEntry")]),e._v(" 实体类型，而私钥证书为 "),s("strong",[e._v("PrivateKeyEntry")])]),e._v(" "),s("h2",{attrs:{id:"四、查看证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、查看证书"}},[e._v("#")]),e._v(" 四、查看证书")]),e._v(" "),s("p",[s("strong",[e._v("打印证书")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("keytool -printcert -file server.cer\n")])])]),s("p",[e._v("输出")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Owner: CN=ZZ, OU=DEV, O=pp.com, L=GZ, ST=GD, C=CN\nIssuer: CN=ZZ, OU=DEV, O=pp.com, L=GZ, ST=GD, C=CN\nSerial number: 797f3140\nValid from: Sun Sep 25 16:43:55 CST 2016 until: Sat Dec 24 16:43:55 CST 2016\nCertificate fingerprints:\n     MD5:  FB:7D:29:4C:A9:F3:07:0E:CC:74:0D:9B:D4:D6:4D:91\n     SHA1: 65:75:C9:08:A0:83:21:A1:D7:8D:DA:CD:3D:FB:C2:E0:50:96:29:62\n     SHA256: E9:8B:A5:43:5F:40:FA:C5:64:3B:0A:11:1D:BE:D1:07:3C:A1:E2:50:88:71:A7:5C:EC:43:22:98:1B:AA:B6:EB\n     Signature algorithm name: SHA1withDSA\n     Version: 3\nExtensions: \n#1: ObjectId: 2.5.29.14 Criticality=false\nSubjectKeyIdentifier [\nKeyIdentifier [\n0000: 0E C3 62 D3 75 3A 3C B7   D9 C4 BD 8E 63 E7 6C EC  ..b.u:<.....c.l.\n0010: AF 8A 29 72                                        ..)r\n]\n]\n")])])]),s("h2",{attrs:{id:"五、转换格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、转换格式"}},[e._v("#")]),e._v(" 五、转换格式")]),e._v(" "),s("p",[s("strong",[e._v("jks格式 转 pkcs12")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("keytool -importkeystore -srckeystore server.keystore -destkeystore server.p12 -srcalias serverkey -destalias serverkey \\\n    -srcstoretype jks -deststoretype pkcs12 -srcstorepass 111111 -deststorepass 111111 -noprompt\n")])])]),s("p",[e._v("*"),s("strong",[e._v("参数说明*")])]),e._v(" "),s("ul",[s("li",[e._v("importkeystore 指示导入导出keystore文件，可用于同类型或不同类型的导入导出")]),e._v(" "),s("li",[e._v("srckeystore 指示源keystore文件")]),e._v(" "),s("li",[e._v("srcalias 指示源实体别名")]),e._v(" "),s("li",[e._v("srcstoretype 指示源store类型(jks/pkcs12..)")]),e._v(" "),s("li",[e._v("srcstorepass 指示源store密码")]),e._v(" "),s("li",[e._v("noprompt 不弹出提示")])]),e._v(" "),s("p",[e._v("*"),s("strong",[e._v("pkcs12 转jks格式与此同理*")])]),e._v(" "),s("h2",{attrs:{id:"六、场景示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、场景示例"}},[e._v("#")]),e._v(" 六、场景示例")]),e._v(" "),s("h3",{attrs:{id:"_1-制作java-ssl-双向证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-制作java-ssl-双向证书"}},[e._v("#")]),e._v(" 1. 制作Java SSL 双向证书")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('storepass=111111\nkeypass=111111\nserver_dname="C=CN,ST=GD,L=SZ,O=vihoo,OU=dev,CN=vihoo.com"\nclient_dname="C=CN,ST=GD,L=SZ,O=vihoo,OU=dev,CN=vihooc.com"\necho "generate server keystore"\nkeytool -genkeypair -alias serverkey -keypass $keypass -storepass $storepass \\\n    -dname $server_dname \\\n    -keyalg RSA -keysize 2048 -validity 3650 -keystore server.keystore\necho "generate client keystore"\nkeytool -genkeypair -alias clientkey -keypass $keypass -storepass $storepass \\\n    -dname $client_dname \\\n    -keyalg RSA -keysize 2048 -validity 3650 -keystore client.keystore\necho "export server certificate"\nkeytool -exportcert -keystore server.keystore -file server.cer -alias serverkey -storepass $storepass\necho "export client certificate"\nkeytool -exportcert -keystore client.keystore -file client.cer -alias clientkey -storepass $storepass\necho "add server cert to client trust keystore"\nkeytool -importcert -keystore client_trust.keystore -file server.cer -alias client_trust_server \\\n    -storepass $storepass -noprompt\necho "add client cert to server trust keystore"\nkeytool -importcert -keystore server_trust.keystore -file client.cer -alias server_trust_client \\\n    -storepass $storepass -noprompt\n')])])]),s("h3",{attrs:{id:"_2-java-证书与-nginx-证书互转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-java-证书与-nginx-证书互转"}},[e._v("#")]),e._v(" 2. Java 证书与 nginx 证书互转")]),e._v(" "),s("p",[e._v("Java通常使用JKS作为证书存储格式，而Nginx往往采用PEM证书格式，如何实现互转？")]),e._v(" "),s("p",[s("strong",[e._v("Nginx 证书 转 JKS")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("A pem证书和私钥合成p12")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("openssl pkcs12 -export -in server.crt -inkey server.key -passin pass:111111 -password pass:111111 \\\n-name server -out server.p12\n")])])]),s("p",[e._v("注意定义-name 选项，这将作为keystore识别实体的参数")])]),e._v(" "),s("li",[s("p",[e._v("B p12 证书转jks 证书")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("keytool -importkeystore -srckeystore server.p12 -destkeystore server.keystore \\\n-srcstoretype pkcs12 -deststoretype jks -srcalias server -destalias server \\\n-deststorepass 111111 -srcstorepass 111111\n")])])]),s("p",[e._v("*"),s("strong",[e._v("如果p12 文件中未指定实体名称，使用keytool转换时则不需提供srcalias/destalias参数，而输出的keystore实体名称默认为1*")])])])]),e._v(" "),s("p",[s("strong",[e._v("JKS 证书 转 Nginx证书")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("A jks 证书转p12")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("keytool -importkeystore -srckeystore server.keystore  -destkeystore server.p12 \\\n-srcstoretype jks -deststoretype pkcs12 -srcalias server -destalias server \\\n-deststorepass 111111 -srcstorepass 111111\n")])])])]),e._v(" "),s("li",[s("p",[e._v("B p12 证书提取pem证书和私钥")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("openssl pkcs12 -in server.p12 -clcerts -nokeys -password pass:111111 -out server.crt\nopenssl pkcs12 -in server.p12  -nocerts -password pass:111111 -passout pass:111111 -out server.key\n")])])]),s("p",[e._v("其中得到的私钥文件为PKCS#8 加密格式，证书和密钥均为PEM文件编码。")])])]),e._v(" "),s("h3",{attrs:{id:"_3-其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-其他"}},[e._v("#")]),e._v(" 3. 其他")]),e._v(" "),s("p",[s("strong",[e._v("已有的Nginx证书，如何快速在Java中添加信任")]),e._v("\n通过keytool -importcert 命令可直接导入信任证书")]),e._v(" "),s("p",[s("strong",[e._v("keytool 通用格式为 jks，如何获取私钥")]),e._v("\n通过程序读取，参考"),s("a",{attrs:{href:"https://stackoverflow.com/questions/150167/how-do-i-list-export-private-keys-from-a-keystore",target:"_blank",rel:"noopener noreferrer"}},[e._v("stackoverflow"),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"http://www.java2s.com/Code/Java/Security/RetrievingaKeyPairfromaKeyStore.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaSE样例"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);