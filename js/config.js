define(function(){
  var gUserInfo = {
    "pageInfo":{
        "heading":"郭大侠",
        "subheading":"So we beat on, boats against the current, borne back ceaselessly into the past!"
    },
    "mainTitle":{
        "baseInfo":"基本信息",
        "workExperiecnce":"工作经历",
        "workSkill":"技术技能",
        "eduBackground":"教育背景",
        "selfEvaluation":"自我评价",
        "selfFootprint":"我的足迹",
        "personalSite":"个人站点"
    },
    "baseInfoTitle": {
        "name": "姓名：",
        "sex": "性别：",
        "age": "年龄：",
        "birth": "出生日期：",
        "phone": "手机号码：",
        "email": "邮箱："
    },
    "baseInfo": {
        "name": "郭威",
        "sex": "男",
        "age": "24",
        "birth": "94-4-17",
        "phone": "15622105443",
        "email": "13580557171@163.com/mrgowell1994@gmail.com"
    },
    "workExperiecnce":{
        "0":{
            "time":"1529-11-11",
            "site":"华山之巅",
            "exprienceDesc":"李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。\
                             李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。\
                             李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。"
        },
        "1":{
            "time":"1529-11-11",
            "site":"峨眉之巅",
            "exprienceDesc":"赵客缦胡缨，吴钩霜雪明。银鞍照白马，飒沓如流星。\
                            十步杀一人，千里不留行。事了拂衣去，深藏身与名。\
                            闲过信陵饮，脱剑膝前横。将炙啖朱亥，持觞劝侯嬴。\
                            三杯吐然诺，五岳倒为轻。眼花耳热后，意气素霓生。\
                            救赵挥金槌，邯郸先震惊。千秋二壮士，煊赫大梁城。\
                            纵死侠骨香，不惭世上英。谁能书閤下，白首太玄经。"
        },
        "2":{
            "time":"xxxx-xx-xx",
            "site":"峨眉之巅",
            "exprienceDesc":"青天有月来几时，我今停杯一问之：\
                            人攀明月不可得，月行却与人相随？\
                            皎如飞镜临丹阙，绿烟灭尽清辉发？\
                            但见宵从海上来，宁知晓向云间没？\
                            白兔捣药秋复春，嫦娥孤栖与谁邻？\
                            今人不见古时月，今月曾经照古人。\
                            古人今人若流水，共看明月皆如此。\
                            唯愿当歌对酒时，月光长照金樽里。"
        }
    },
    "workSkill":{
        "0":{
            "skillName":"JavaScript",
            "ability":"66%"
        },
        "1":{
            "skillName":"Html",
            "ability":"59%"
        },
        "2":{
            "skillName":"CSS",
            "ability":"59%"
        },
        "3":{
            "skillName":"PhotoShop",
            "ability":"39%"
        },
        "4":{
            "skillName":"jQuery",
            "ability":"55%"
        },
        "5":{
            "skillName":"Bootstrap",
            "ability":"60%"
        },
        "6":{
            "skillName": "PHP",
            "ability": "40%"
        },
        "7": {
            "skillName": "NodeJs",
            "ability": "46%"
        },
        "8": {
            "skillName": "H5/C3",
            "ability": "56%"
        },
        "9": {
            "skillName": "Vue",
            "ability": "56%"
        },
    },
    "eduBackground":{
        "0":{
            "university":"广东工业大学",
            "time":"16-07-01",
            "direction": "微电子学",
            "details": "自12年入坑电子，常备感集成电路专业之艰辛。星辉斜月，挑灯夜战备考模数CMOS。\
                        自觉无能于集成电路设计，便不做打算。泡图书馆四楼三年，大学四年阅读量400多本，此为最自豪事之一。\
                        入校方程式赛车队FSAE，负责电路设计。与友人合作研发智能可穿戴设备，此为最自豪事之二。\
                        大学四年博广见闻，涉猎广泛，遇得好友几人，此为最幸运事之一。\
                        在校期间大大小小比赛数个，收获专利两项、国赛、省赛亦有斩获。"
        }
    },
    "selfEvaluation":{
        "0":"一个兴趣使然的人，王小波门下走狗，爱好一切有趣的事物，最近想尝试针织，如果有机会一定要做一个木匠.",
        // "1":"诺贝尔，呱呱坠地之时，小生命差点断送在仁慈的医生手中。主要美德：保持指甲干净，从不累及他人。主要过失：终身不娶，脾气不佳，消化力差。唯一愿望：不要被人活埋。最大罪恶：不敬鬼神。重要事迹：无。----诺贝尔一篇短而精的自传"
    },
    "selfFootprint":{
        "email":{
            "url":"mailto:1107840447@qq.com",
            "icon":"icon-email",
            "name":"1107840447@qq.com"
        },
        "weibo":{
            "url":"https://weibo.com/2965761403/profile?topnav=1&wvr=6",
            "icon":"icon-weibo",
            "name":"微博"
        },
        "v2ex":{
            "url":"https://www.v2ex.com/member/MrGo",
            "icon":"icon-v2ex",
            "name":"V2ex"
        },
        "github":{
            "url":"https://github.com/DAAI093",
            "icon":"icon-github",
            "name":"Github"
        },
        "facebook":{
            "url":"https://www.facebook.com/profile.php?id=100012734470392",
            "icon":"icon-facebook",
            "name":"Facebook"
        },
        // "twitter":{
        //     "url":"https://twitter.com/guowei",
        //     "icon":"icon-twitter",
        //     "name":"twitter"
        // },
        "douban":{
            "url":"https://www.douban.com/people/65130576/",
            "icon":"icon-douban",
            "name":"豆瓣"
        },
        "boke":{
            "url":"https://home.cnblogs.com/u/mrgo/",
            "icon":"fi-social-blogger",
            "name":"博客园"
        },
        // "blog":{
        //     "url": "http://mrgo.top",
        //     "icon": "icon-blog",
        //     "name": "个人网站"
        // }
    }
  }
  return gUserInfo;
});
