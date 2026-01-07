// --- 数据部分 ---
const ALL_MOVIES = [
    { id: 1, title: '星际穿越', titleEn: 'Interstellar', year: '2014', genre: '科幻', genreEn: 'Sci-Fi', rating: 9.3, director: '克里斯托弗·诺兰', directorEn: 'Christopher Nolan' },
    { id: 2, title: '盗梦空间', titleEn: 'Inception', year: '2010', genre: '科幻', genreEn: 'Sci-Fi', rating: 9.2, director: '克里斯托弗·诺兰', directorEn: 'Christopher Nolan' },
    { id: 3, title: '霸王别姬', titleEn: 'Farewell My Concubine', year: '1993', genre: '剧情', genreEn: 'Drama', rating: 9.6, director: '陈凯歌', directorEn: 'Chen Kaige' },
    { id: 4, title: '千与千寻', titleEn: 'Spirited Away', year: '2001', genre: '动画', genreEn: 'Animation', rating: 9.4, director: '宫崎骏', directorEn: 'Hayao Miyazaki' },
    { id: 5, title: '泰坦尼克号', titleEn: 'Titanic', year: '1997', genre: '爱情', genreEn: 'Romance', rating: 9.4, director: '詹姆斯·卡梅隆', directorEn: 'James Cameron' },
    { id: 6, title: '阿凡达', titleEn: 'Avatar', year: '2009', genre: '科幻', genreEn: 'Sci-Fi', rating: 8.7, director: '詹姆斯·卡梅隆', directorEn: 'James Cameron' },
    { id: 7, title: '大话西游', titleEn: 'A Chinese Odyssey', year: '1995', genre: '喜剧', genreEn: 'Comedy', rating: 9.2, director: '刘镇伟', directorEn: 'Jeff Lau' },
    { id: 8, title: '让子弹飞', titleEn: 'Let the Bullets Fly', year: '2010', genre: '动作', genreEn: 'Action', rating: 8.9, director: '姜文', directorEn: 'Jiang Wen' },
    { id: 9, title: '肖申克的救赎', titleEn: 'The Shawshank Redemption', year: '1994', genre: '剧情', genreEn: 'Drama', rating: 9.7, director: '弗兰克·德拉邦特', directorEn: 'Frank Darabont' },
    { id: 10, title: '疯狂动物城', titleEn: 'Zootopia', year: '2016', genre: '动画', genreEn: 'Animation', rating: 9.1, director: '拜伦·霍华德', directorEn: 'Byron Howard' },
    { id: 11, title: '复仇者联盟4', titleEn: 'Avengers: Endgame', year: '2019', genre: '动作', genreEn: 'Action', rating: 8.5, director: '罗素兄弟', directorEn: 'Russo Brothers' },
    { id: 12, title: '流浪地球2', titleEn: 'The Wandering Earth II', year: '2023', genre: '科幻', genreEn: 'Sci-Fi', rating: 8.3, director: '郭帆', directorEn: 'Frant Gwo' },
    { id: 13, title: '黑客帝国', titleEn: 'The Matrix', year: '1999', genre: '科幻', genreEn: 'Sci-Fi', rating: 9.0, director: '沃卓斯基姐妹', directorEn: 'The Wachowskis' },
    { id: 14, title: '银翼杀手2049', titleEn: 'Blade Runner 2049', year: '2017', genre: '科幻', genreEn: 'Sci-Fi', rating: 8.5, director: '丹尼斯·维伦纽瓦', directorEn: 'Denis Villeneuve' },
    { id: 15, title: '沙丘', titleEn: 'Dune', year: '2021', genre: '科幻', genreEn: 'Sci-Fi', rating: 7.9, director: '丹尼斯·维伦纽瓦', directorEn: 'Denis Villeneuve' },
    { id: 16, title: '火星救援', titleEn: 'The Martian', year: '2015', genre: '科幻', genreEn: 'Sci-Fi', rating: 8.4, director: '雷德利·斯科特', directorEn: 'Ridley Scott' },
    { id: 17, title: '教父', titleEn: 'The Godfather', year: '1972', genre: '剧情', genreEn: 'Drama', rating: 9.7, director: '弗朗西斯·科波拉', directorEn: 'Francis Ford Coppola' },
    { id: 18, title: '阿甘正传', titleEn: 'Forrest Gump', year: '1994', genre: '剧情', genreEn: 'Drama', rating: 9.5, director: '罗伯特·泽米吉斯', directorEn: 'Robert Zemeckis' },
    { id: 19, title: '楚门的世界', titleEn: 'The Truman Show', year: '1998', genre: '剧情', genreEn: 'Drama', rating: 9.3, director: '彼得·威尔', directorEn: 'Peter Weir' },
    { id: 20, title: '海上钢琴师', titleEn: 'The Legend of 1900', year: '1998', genre: '剧情', genreEn: 'Drama', rating: 9.3, director: '朱塞佩·托纳多雷', directorEn: 'Giuseppe Tornatore' },
    { id: 21, title: '放牛班的春天', titleEn: 'The Chorus', year: '2004', genre: '剧情', genreEn: 'Drama', rating: 9.3, director: '克里斯托夫·巴拉蒂', directorEn: 'Christophe Barratier' },
    { id: 22, title: '当幸福来敲门', titleEn: 'The Pursuit of Happyness', year: '2006', genre: '剧情', genreEn: 'Drama', rating: 9.2, director: '加布里埃莱·穆奇诺', directorEn: 'Gabriele Muccino' },
    { id: 23, title: '触不可及', titleEn: 'The Intouchables', year: '2011', genre: '喜剧', genreEn: 'Comedy', rating: 9.3, director: '奥利维·那卡什', directorEn: 'Olivier Nakache' },
    { id: 24, title: '绿皮书', titleEn: 'Green Book', year: '2018', genre: '剧情', genreEn: 'Drama', rating: 8.9, director: '彼得·法雷里', directorEn: 'Peter Farrelly' },
    { id: 25, title: '寄生虫', titleEn: 'Parasite', year: '2019', genre: '剧情', genreEn: 'Drama', rating: 8.7, director: '奉俊昊', directorEn: 'Bong Joon-ho' },
    { id: 26, title: '奥本海默', titleEn: 'Oppenheimer', year: '2023', genre: '剧情', genreEn: 'Drama', rating: 8.8, director: '克里斯托弗·诺兰', directorEn: 'Christopher Nolan' },
    { id: 27, title: '龙猫', titleEn: 'My Neighbor Totoro', year: '1988', genre: '动画', genreEn: 'Animation', rating: 9.2, director: '宫崎骏', directorEn: 'Hayao Miyazaki' },
    { id: 28, title: '寻梦环游记', titleEn: 'Coco', year: '2017', genre: '动画', genreEn: 'Animation', rating: 9.1, director: '李·昂克里奇', directorEn: 'Lee Unkrich' },
    { id: 29, title: '机器人总动员', titleEn: 'WALL·E', year: '2008', genre: '动画', genreEn: 'Animation', rating: 9.3, director: '安德鲁·斯坦顿', directorEn: 'Andrew Stanton' },
    { id: 30, title: '蜘蛛侠：纵横宇宙', titleEn: 'Spider-Man: Across the Spider-Verse', year: '2023', genre: '动画', genreEn: 'Animation', rating: 8.6, director: 'Joaquim Dos Santos', directorEn: 'Joaquim Dos Santos' },
    { id: 31, title: '你的名字', titleEn: 'Your Name', year: '2016', genre: '动画', genreEn: 'Animation', rating: 8.5, director: '新海诚', directorEn: 'Makoto Shinkai' },
    { id: 32, title: '蝙蝠侠：黑暗骑士', titleEn: 'The Dark Knight', year: '2008', genre: '动作', genreEn: 'Action', rating: 9.2, director: '克里斯托弗·诺兰', directorEn: 'Christopher Nolan' },
    { id: 33, title: '这个杀手不太冷', titleEn: 'Léon: The Professional', year: '1994', genre: '动作', genreEn: 'Action', rating: 9.4, director: '吕克·贝松', directorEn: 'Luc Besson' },
    { id: 34, title: '头号玩家', titleEn: 'Ready Player One', year: '2018', genre: '动作', genreEn: 'Action', rating: 8.7, director: '斯蒂文·斯皮尔伯格', directorEn: 'Steven Spielberg' },
    { id: 35, title: '三傻大闹宝莱坞', titleEn: '3 Idiots', year: '2009', genre: '喜剧', genreEn: 'Comedy', rating: 9.2, director: '拉吉库马尔·希拉尼', directorEn: 'Rajkumar Hirani' },
    { id: 36, title: '布达佩斯大饭店', titleEn: 'The Grand Budapest Hotel', year: '2014', genre: '喜剧', genreEn: 'Comedy', rating: 8.9, director: '韦斯·安德森', directorEn: 'Wes Anderson' },
    { id: 37, title: '罗马假日', titleEn: 'Roman Holiday', year: '1953', genre: '爱情', genreEn: 'Romance', rating: 9.0, director: '威廉·惠勒', directorEn: 'William Wyler' },
    { id: 38, title: '爱乐之城', titleEn: 'La La Land', year: '2016', genre: '爱情', genreEn: 'Romance', rating: 8.4, director: '达米恩·查泽雷', directorEn: 'Damien Chazelle' },
    { id: 39, title: '情书', titleEn: 'Love Letter', year: '1995', genre: '爱情', genreEn: 'Romance', rating: 8.9, director: '岩井俊二', directorEn: 'Shunji Iwai' },
    { id: 40, title: '重庆森林', titleEn: 'Chungking Express', year: '1994', genre: '爱情', genreEn: 'Romance', rating: 8.8, director: '王家卫', directorEn: 'Wong Kar-wai' },
    { id: 41, title: '哈尔的移动城堡', titleEn: 'Howl\'s Moving Castle', year: '2004', genre: '动画', genreEn: 'Animation', rating: 9.1, director: '宫崎骏', directorEn: 'Hayao Miyazaki' },
    { id: 42, title: '疯狂的麦克斯4', titleEn: 'Mad Max: Fury Road', year: '2015', genre: '动作', genreEn: 'Action', rating: 8.6, director: '乔治·米勒', directorEn: 'George Miller' },
    { id: 43, title: '芭比', titleEn: 'Barbie', year: '2023', genre: '喜剧', genreEn: 'Comedy', rating: 7.0, director: '格蕾塔·葛韦格', directorEn: 'Greta Gerwig' },
    { id: 44, title: '真爱至上', titleEn: 'Love Actually', year: '2003', genre: '爱情', genreEn: 'Romance', rating: 8.6, director: '理查德·柯蒂斯', directorEn: 'Richard Curtis' },
    { id: 45, title: '疯狂的石头', titleEn: 'Crazy Stone', year: '2006', genre: '喜剧', genreEn: 'Comedy', rating: 8.5, director: '宁浩', directorEn: 'Ning Hao' },
    { id: 46, title: '怦然心动', titleEn: 'Flipped', year: '2010', genre: '爱情', genreEn: 'Romance', rating: 9.1, director: '罗伯·莱纳', directorEn: 'Rob Reiner' },
    { id: 47, title: '搏击俱乐部', titleEn: 'Fight Club', year: '1999', genre: '剧情', genreEn: 'Drama', rating: 9.0, director: '大卫·芬奇', directorEn: 'David Fincher' },
    { id: 48, title: '狮子王', titleEn: 'The Lion King', year: '1994', genre: '动画', genreEn: 'Animation', rating: 9.0, director: '罗杰·阿勒斯', directorEn: 'Roger Allers' },
    { id: 49, title: '玩具总动员', titleEn: 'Toy Story', year: '1995', genre: '动画', genreEn: 'Animation', rating: 8.9, director: '约翰·拉塞特', directorEn: 'John Lasseter' },
    { id: 50, title: '指环王：护戒使者', titleEn: 'The Lord of the Rings: The Fellowship of the Ring', year: '2001', genre: '动作', genreEn: 'Action', rating: 9.0, director: '彼得·杰克逊', directorEn: 'Peter Jackson' },
    { id: 51, title: 'E.T. 外星人', titleEn: 'E.T. the Extra-Terrestrial', year: '1982', genre: '科幻', genreEn: 'Sci-Fi', rating: 8.6, director: '斯蒂文·斯皮尔伯格', directorEn: 'Steven Spielberg' },
    { id: 52, title: '回到未来', titleEn: 'Back to the Future', year: '1985', genre: '科幻', genreEn: 'Sci-Fi', rating: 8.7, director: '罗伯特·泽米吉斯', directorEn: 'Robert Zemeckis' },
    { id: 53, title: '侏罗纪公园', titleEn: 'Jurassic Park', year: '1993', genre: '科幻', genreEn: 'Sci-Fi', rating: 8.2, director: '斯蒂文·斯皮尔伯格', directorEn: 'Steven Spielberg' },
    { id: 54, title: '星球大战', titleEn: 'Star Wars', year: '1977', genre: '科幻', genreEn: 'Sci-Fi', rating: 8.6, director: '乔治·卢卡斯', directorEn: 'George Lucas' },
    { id: 55, title: '超能陆战队', titleEn: 'Big Hero 6', year: '2014', genre: '动画', genreEn: 'Animation', rating: 8.0, director: '唐·霍尔', directorEn: 'Don Hall' },
    { id: 56, title: '十二怒汉', titleEn: '12 Angry Men', year: '1957', genre: '剧情', genreEn: 'Drama', rating: 9.4, director: '希德尼·鲁迈特', directorEn: 'Sidney Lumet' },
    { id: 57, title: '辛德勒的名单', titleEn: 'Schindler\'s List', year: '1993', genre: '剧情', genreEn: 'Drama', rating: 9.5, director: '斯蒂文·斯皮尔伯格', directorEn: 'Steven Spielberg' },
    { id: 58, title: '心灵捕手', titleEn: 'Good Will Hunting', year: '1997', genre: '剧情', genreEn: 'Drama', rating: 8.9, director: '格斯·范·桑特', directorEn: 'Gus Van Sant' },
    { id: 59, title: '死亡诗社', titleEn: 'Dead Poets Society', year: '1989', genre: '剧情', genreEn: 'Drama', rating: 9.1, director: '彼得·威尔', directorEn: 'Peter Weir' },
    { id: 60, title: '忠犬八公的故事', titleEn: 'Hachi: A Dog\'s Tale', year: '2009', genre: '剧情', genreEn: 'Drama', rating: 9.4, director: '莱塞·霍尔斯道姆', directorEn: 'Lasse Hallström' },
    { id: 61, title: '飞屋环游记', titleEn: 'Up', year: '2009', genre: '动画', genreEn: 'Animation', rating: 9.1, director: '彼特·道格特', directorEn: 'Pete Docter' },
    { id: 62, title: '头脑特工队', titleEn: 'Inside Out', year: '2015', genre: '动画', genreEn: 'Animation', rating: 8.7, director: '彼特·道格特', directorEn: 'Pete Docter' },
    { id: 63, title: '海底总动员', titleEn: 'Finding Nemo', year: '2003', genre: '动画', genreEn: 'Animation', rating: 8.4, director: '安德鲁·斯坦顿', directorEn: 'Andrew Stanton' },
    { id: 64, title: '怪物史莱克', titleEn: 'Shrek', year: '2001', genre: '动画', genreEn: 'Animation', rating: 8.0, director: '安德鲁·亚当森', directorEn: 'Andrew Adamson' },
    { id: 65, title: '功夫熊猫', titleEn: 'Kung Fu Panda', year: '2008', genre: '动画', genreEn: 'Animation', rating: 8.1, director: '马克·奥斯本', directorEn: 'Mark Osborne' },
    { id: 66, title: '驯龙高手', titleEn: 'How to Train Your Dragon', year: '2010', genre: '动画', genreEn: 'Animation', rating: 8.7, director: '克里斯·桑德斯', directorEn: 'Chris Sanders' },
    { id: 67, title: '冰雪奇缘', titleEn: 'Frozen', year: '2013', genre: '动画', genreEn: 'Animation', rating: 8.4, director: '克里斯·巴克', directorEn: 'Chris Buck' },
    { id: 68, title: '铃芽之旅', titleEn: 'Suzume', year: '2022', genre: '动画', genreEn: 'Animation', rating: 7.9, director: '新海诚', directorEn: 'Makoto Shinkai' },
    { id: 69, title: '壮志凌云2', titleEn: 'Top Gun: Maverick', year: '2022', genre: '动作', genreEn: 'Action', rating: 8.3, director: '约瑟夫·科辛斯基', directorEn: 'Joseph Kosinski' },
    { id: 70, title: '角斗士', titleEn: 'Gladiator', year: '2000', genre: '动作', genreEn: 'Action', rating: 8.6, director: '雷德利·斯科特', directorEn: 'Ridley Scott' },
    { id: 71, title: '勇敢的心', titleEn: 'Braveheart', year: '1995', genre: '动作', genreEn: 'Action', rating: 8.9, director: '梅尔·吉布森', directorEn: 'Mel Gibson' },
    { id: 72, title: '卧虎藏龙', titleEn: 'Crouching Tiger, Hidden Dragon', year: '2000', genre: '动作', genreEn: 'Action', rating: 8.4, director: '李安', directorEn: 'Ang Lee' },
    { id: 73, title: '英雄', titleEn: 'Hero', year: '2002', genre: '动作', genreEn: 'Action', rating: 7.7, director: '张艺谋', directorEn: 'Zhang Yimou' },
    { id: 74, title: '碟中谍', titleEn: 'Mission: Impossible', year: '1996', genre: '动作', genreEn: 'Action', rating: 7.8, director: '布莱恩·德·帕尔玛', directorEn: 'Brian De Palma' },
    { id: 75, title: '指环王：双塔奇兵', titleEn: 'The Lord of the Rings: The Two Towers', year: '2002', genre: '动作', genreEn: 'Action', rating: 9.1, director: '彼得·杰克逊', directorEn: 'Peter Jackson' },
    { id: 76, title: '指环王：王者无敌', titleEn: 'The Lord of the Rings: The Return of the King', year: '2003', genre: '动作', genreEn: 'Action', rating: 9.2, director: '彼得·杰克逊', directorEn: 'Peter Jackson' },
    { id: 77, title: '小鬼当家', titleEn: 'Home Alone', year: '1990', genre: '喜剧', genreEn: 'Comedy', rating: 8.4, director: '克里斯·哥伦布', directorEn: 'Chris Columbus' },
    { id: 78, title: '摩登时代', titleEn: 'Modern Times', year: '1936', genre: '喜剧', genreEn: 'Comedy', rating: 9.3, director: '查理·卓别林', directorEn: 'Charlie Chaplin' },
    { id: 79, title: '憨豆的黄金周', titleEn: 'Mr. Bean\'s Holiday', year: '2007', genre: '喜剧', genreEn: 'Comedy', rating: 8.1, director: '史蒂夫·班德莱克', directorEn: 'Steve Bendelack' },
    { id: 80, title: '变相怪杰', titleEn: 'The Mask', year: '1994', genre: '喜剧', genreEn: 'Comedy', rating: 7.9, director: '查克·拉塞尔', directorEn: 'Chuck Russell' },
    { id: 81, title: '功夫', titleEn: 'Kung Fu Hustle', year: '2004', genre: '喜剧', genreEn: 'Comedy', rating: 8.8, director: '周星驰', directorEn: 'Stephen Chow' },
    { id: 82, title: '唐伯虎点秋香', titleEn: 'Flirting Scholar', year: '1993', genre: '喜剧', genreEn: 'Comedy', rating: 8.7, director: '李力持', directorEn: 'Lee Lik-Chi' },
    { id: 83, title: '傲慢与偏见', titleEn: 'Pride & Prejudice', year: '2005', genre: '爱情', genreEn: 'Romance', rating: 8.7, director: '乔·怀特', directorEn: 'Joe Wright' },
    { id: 84, title: '恋恋笔记本', titleEn: 'The Notebook', year: '2004', genre: '爱情', genreEn: 'Romance', rating: 8.5, director: '尼克·卡索维茨', directorEn: 'Nick Cassavetes' },
    { id: 85, title: '初吻', titleEn: 'La Boum', year: '1980', genre: '爱情', genreEn: 'Romance', rating: 8.1, director: '克劳德·皮诺托', directorEn: 'Claude Pinoteau' },
    { id: 86, title: '爱在黎明破晓前', titleEn: 'Before Sunrise', year: '1995', genre: '爱情', genreEn: 'Romance', rating: 8.8, director: '理查德·林克莱特', directorEn: 'Richard Linklater' },
    { id: 87, title: '爱在日落黄昏时', titleEn: 'Before Sunset', year: '2004', genre: '爱情', genreEn: 'Romance', rating: 8.9, director: '理查德·林克莱特', directorEn: 'Richard Linklater' },
    { id: 88, title: '爱在午夜降临前', titleEn: 'Before Midnight', year: '2013', genre: '爱情', genreEn: 'Romance', rating: 8.9, director: '理查德·林克莱特', directorEn: 'Richard Linklater' },
    { id: 89, title: '哈利·波特与魔法石', titleEn: 'Harry Potter and the Sorcerer\'s Stone', year: '2001', genre: '科幻', genreEn: 'Sci-Fi', rating: 9.1, director: '克里斯·哥伦布', directorEn: 'Chris Columbus' },
    { id: 90, title: '终结者2：审判日', titleEn: 'Terminator 2: Judgment Day', year: '1991', genre: '科幻', genreEn: 'Sci-Fi', rating: 8.8, director: '詹姆斯·卡梅隆', directorEn: 'James Cameron' },
    { id: 91, title: '美丽心灵', titleEn: 'A Beautiful Mind', year: '2001', genre: '剧情', genreEn: 'Drama', rating: 9.1, director: '朗·霍华德', directorEn: 'Ron Howard' },
    { id: 92, title: '让爱传出去', titleEn: 'Pay It Forward', year: '2000', genre: '剧情', genreEn: 'Drama', rating: 8.5, director: '米咪·莱德', directorEn: 'Mimi Leder' },
    { id: 93, title: '秒速5厘米', titleEn: '5 Centimeters per Second', year: '2007', genre: '动画', genreEn: 'Animation', rating: 8.3, director: '新海诚', directorEn: 'Makoto Shinkai' },
    { id: 94, title: '哪吒之魔童降世', titleEn: 'Ne Zha', year: '2019', genre: '动画', genreEn: 'Animation', rating: 8.4, director: '饺子', directorEn: 'Jiaozi' },
    { id: 95, title: '速度与激情7', titleEn: 'Furious 7', year: '2015', genre: '动作', genreEn: 'Action', rating: 8.4, director: '温子仁', directorEn: 'James Wan' },
    { id: 96, title: '黑豹', titleEn: 'Black Panther', year: '2018', genre: '动作', genreEn: 'Action', rating: 6.9, director: '瑞恩·库格勒', directorEn: 'Ryan Coogler' },
    { id: 97, title: '宿醉', titleEn: 'The Hangover', year: '2009', genre: '喜剧', genreEn: 'Comedy', rating: 7.7, director: '托德·菲利普斯', directorEn: 'Todd Phillips' },
    { id: 98, title: '泰囧', titleEn: 'Lost in Thailand', year: '2012', genre: '喜剧', genreEn: 'Comedy', rating: 7.5, director: '徐峥', directorEn: 'Xu Zheng' },
    { id: 99, title: '断背山', titleEn: 'Brokeback Mountain', year: '2005', genre: '爱情', genreEn: 'Romance', rating: 8.8, director: '李安', directorEn: 'Ang Lee' },
    { id: 100, title: '请以你的名字呼唤我', titleEn: 'Call Me by Your Name', year: '2017', genre: '爱情', genreEn: 'Romance', rating: 8.9, director: '卢卡·瓜达尼诺', directorEn: 'Luca Guadagnino' },
].map(m => ({ ...m, posterClass: `poster-gradient-${m.id % 8}` }));

// 额外的电影详情数据
const EXTRA_DATA = {
    1: {
        cast: "马修·麦康纳, 安妮·海瑟薇, 杰西卡·查斯坦",
        castEn: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        synopsis: "《星际穿越》讲述了一队探险家利用他们针对虫洞的新发现，超越人类对于太空旅行的极限，从而开始在广袤的宇宙中进行星际航行的故事。地球农作物因气候转变及枯萎病枯死，曾是NASA宇航员的库珀在女儿墨菲的书房发现奇怪的重力场异常，进而被引导至NASA秘密基地。为了拯救人类，库珀不得不告别儿女，踏上寻找宜居星球的征途。影片以其硬核的科学理论基础、震撼的视觉奇观以及深沉的父女情感，探讨了爱、时间和牺牲的宏大主题。",
        synopsisEn: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. As Earth's crops are blighted and the planet becomes increasingly uninhabitable, former NASA pilot Cooper is recruited for a secret mission. He must leave his family behind to lead a crew through a newly discovered wormhole, scouting potential new homes for the human race across the galaxy."
    },
    2: {
        cast: "莱昂纳多·迪卡普里奥, 约瑟夫·高登-莱维特, 艾伦·佩吉",
        castEn: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
        synopsis: "道姆·柯布与同事阿瑟和纳什在一次针对日本能源大亨齐藤的盗梦行动中失败，反被齐藤利用。齐藤威逼利诱柯布帮助他拆分竞争对手的公司，采取的手段是“植入”意念。柯布为了能回家见儿女，答应了这项看似不可能完成的任务。他召集了筑梦师、伪装者、药剂师等各路高手，进入了目标人物多层梦境的深处，展开了一场惊心动魄的潜意识冒险。",
        synopsisEn: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption."
    },
};

const TRANSLATIONS = {
    zh: {
        genres: ['全部', '科幻', '剧情', '动画', '动作', '喜剧', '爱情'],
        navTitle: '分类导航',
        allMovies: '所有电影',
        noMovies: '该分类下暂无电影',
        filterLabel: '筛选:',
        totalMovies: '共 {count} 部影片',
        allYears: '所有年份',
        searchTitle: '探索电影世界',
        searchPlaceholder: '搜索片名、导演（如：诺兰...）',
        searchResult: '搜索结果',
        recommend: '推荐电影',
        noResult: '没有找到相关电影',
        tags: [
            { label: '热门科幻', type: 'genre', value: '科幻' },
            { label: '2023新片', type: 'year', value: '2023' },
            { label: '诺兰导演', type: 'director', value: '克里斯托弗·诺兰' },
            { label: '高分必看', type: 'rating', value: '9.0' },
        ],
        layouts: { list: '列表布局', grid: '网格布局', search: '搜索主导' },
        demoTitle: '电影资料库',
        demoDesc: '移动端适配演示版',
        listDesc: ['特点：桌面端侧边栏，移动端自动转为顶部水平导航。', '交互：适配触摸滑动与惯性滚动。'],
        gridDesc: ['特点：桌面端多列网格，移动端双列布局。', '视觉：保持卡片比例，适配小屏幕。'],
        searchDesc: ['特点：全屏沉浸式搜索，适配虚拟键盘弹出。', '优化：输入框和标签更易点击。'],
        // 测试模式
        summaryTitle: '用户体验测试报告',
        summaryTester: '测试者',
        summaryTotal: '总耗时',
        summaryAvg: '平均耗时',
        exportData: '导出数据',
        restartTest: '重新开始测试',
        colTask: '任务',
        colTarget: '目标影片',
        colLayout: '布局类型',
        colTime: '耗时 (秒)',
        startNext: '开始下一个任务',
        taskCompleted: '任务完成！',
        timeTaken: '本次检索耗时',
        enterName: '请输入您的昵称开始测试',
        startTest: '开始测试',
        testMode: '用户体验测试',
        taskProgress: '任务进度',
        abortTask: '放弃本次任务',
        startTaskBtn: '开始随机任务',
    },
    en: {
        genres: ['All', 'Sci-Fi', 'Drama', 'Animation', 'Action', 'Comedy', 'Romance'],
        navTitle: 'Categories',
        allMovies: 'All Movies',
        noMovies: 'No movies found',
        filterLabel: 'Filter:',
        totalMovies: '{count} movies',
        allYears: 'All Years',
        searchTitle: 'Explore Movies',
        searchPlaceholder: 'Search title, director...',
        searchResult: 'Results',
        recommend: 'Recommended',
        noResult: 'No movies found',
        tags: [
            { label: 'Popular Sci-Fi', type: 'genre', value: 'Sci-Fi' },
            { label: 'New in 2023', type: 'year', value: '2023' },
            { label: 'Nolan', type: 'director', value: 'Christopher Nolan' },
            { label: 'Top Rated', type: 'rating', value: '9.0' },
        ],
        layouts: { list: 'List View', grid: 'Grid View', search: 'Search View' },
        demoTitle: 'Movie DB',
        demoDesc: 'Mobile Responsive Version',
        listDesc: ['Feature: Sidebar on desktop, top horizontal nav on mobile.', 'Interaction: Optimized for touch scrolling.'],
        gridDesc: ['Feature: Multi-column grid on desktop, 2-column on mobile.', 'Visual: Preserves card aspect ratio.'],
        searchDesc: ['Feature: Immersive search, adapts to virtual keyboard.', 'Optimization: Larger touch targets.'],
        // Testing
        summaryTitle: 'UX Test Report',
        summaryTester: 'Tester',
        summaryTotal: 'Total Time',
        summaryAvg: 'Avg Time',
        exportData: 'Export Data',
        restartTest: 'Restart Test',
        colTask: 'Task',
        colTarget: 'Target Movie',
        colLayout: 'Layout',
        colTime: 'Time (s)',
        startNext: 'Start Next Task',
        taskCompleted: 'Task Completed!',
        timeTaken: 'Time Taken',
        enterName: 'Enter your nickname to start',
        startTest: 'Start Test',
        testMode: 'UX Research Mode',
        taskProgress: 'Task Progress',
        abortTask: 'Abort Task',
        startTaskBtn: 'Start Random Task',
    }
};

const state = {
    layout: 'list',
    lang: 'zh',
    theme: 'light',
    listExpandedGenre: '科幻',
    listSelectedYear: null,
    gridFilterGenre: '全部',
    gridFilterYear: 'All',
    searchQuery: '',
    searchActiveTag: null,
    
    selectedMovieId: null,
    previousLayout: null,

    test: {
        stage: 'idle', 
        testerName: '',
        history: [], 
        maxTests: 6,
        targetMovie: null,
        targetLayout: null,
        startTime: 0,
        timerInterval: null,
        elapsedTime: 0
    }
};

function init() { 
    renderApp(); 
    updateTheme(); 
    renderTaskBar();
}

function setState(key, value) {
    state[key] = value;
    if (key === 'theme') updateTheme();
    renderApp();
}

function updateTheme() {
    if (state.theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
}

// --- 导航操作 ---
function viewMovie(id) {
    if (state.test.stage === 'testing' && state.test.targetMovie) {
        if (id === state.test.targetMovie.id) {
            endTask(true);
        } else {
            const title = state.lang === 'zh' ? state.test.targetMovie.title : state.test.targetMovie.titleEn;
            showToast(state.lang === 'zh' ? `目标错误！请寻找《${title}》` : `Wrong movie! Find "${title}"`);
        }
        return; 
    }

    state.selectedMovieId = id;
    if (state.layout !== 'detail') {
        state.previousLayout = state.layout;
        state.layout = 'detail';
    }
    renderApp();
}

function closeDetail() {
    state.layout = state.previousLayout || 'list';
    state.selectedMovieId = null;
    renderApp();
}

function renderApp() {
    renderHeader();
    renderContent();
    renderFooter();
    if (window.lucide) {
        window.lucide.createIcons();
    } else {
        setTimeout(() => { if (window.lucide) window.lucide.createIcons(); }, 100);
    }
}

function getMovieInfo(m) {
    const isEn = state.lang === 'en';
    return {
        title: isEn ? m.titleEn : m.title,
        genre: isEn ? m.genreEn : m.genre,
        director: isEn ? m.directorEn : m.director
    };
}

function getEnhancedMovieInfo(m) {
   const info = getMovieInfo(m);
   const extra = EXTRA_DATA[m.id] || {};
   let cast = extra.cast;
   if (state.lang === 'en' && extra.castEn) cast = extra.castEn;
   if (!cast) cast = state.lang === 'zh' ? '暂无详细演员表' : 'Cast details not available';
   let synopsis = extra.synopsis;
   if (state.lang === 'en' && extra.synopsisEn) synopsis = extra.synopsisEn;
   if (!synopsis) {
       synopsis = state.lang === 'zh' 
          ? `这是一部于 ${m.year} 年上映的经典${info.genre}电影，由知名导演${info.director}执导。影片以其引人入胜的叙事节奏和精湛的视觉表现，生动地刻画了人物的内心世界与命运沉浮。《${info.title}》自上映以来便广受好评，获得了 ${m.rating} 的高分评价。`
          : `An acclaimed ${info.genre} film released in ${m.year}, directed by the visionary ${info.director}. "${info.title}" has captivated audiences with its compelling storytelling and visual mastery. Rated ${m.rating} stars, it remains a defining work in the genre.`;
   }
   return { ...info, cast, synopsis };
}

// --- 测试系统逻辑 ---
function initTestSession() {
    state.test.stage = 'input_name';
    showNameInputModal();
}

function showNameInputModal() {
    const wrapper = document.createElement('div');
    wrapper.id = 'name-input-modal-wrapper';
    wrapper.style.cssText = 'position: fixed; inset: 0; z-index: 2000; display: flex; align-items: center; justify-content: center;';
    const t = TRANSLATIONS[state.lang];
    
    wrapper.innerHTML = `
        <div class="modal-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);"></div>
        <div class="success-modal" style="position: relative; background: var(--bg-card); padding: 2rem; border-radius: 1rem; box-shadow: 0 20px 50px rgba(0,0,0,0.3); text-align: center; min-width: 300px; max-width: 90%; margin: 1rem; border: 2px solid var(--primary); animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
            <h2 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin-bottom:1rem">
                ${t.enterName}
            </h2>
            <input type="text" id="tester-nickname" placeholder="Nickname" style="width:100%; padding:0.75rem; border:1px solid var(--border); border-radius:0.5rem; margin-bottom:1.5rem; font-size:1rem; outline:none; background:var(--bg-body); color:var(--text-main)" autofocus>
            <button onclick="confirmTesterName()" class="btn btn-primary" style="width:100%; justify-content:center; padding:0.75rem;">
                ${t.startTest}
            </button>
        </div>
    `;
    document.body.appendChild(wrapper);
    setTimeout(() => document.getElementById('tester-nickname').focus(), 100);
}

function confirmTesterName() {
    const nameInput = document.getElementById('tester-nickname');
    const name = nameInput.value.trim();
    if (!name) {
        showToast("请输入昵称 / Please enter a nickname");
        return;
    }
    
    state.test.testerName = name;
    state.test.stage = 'testing';
    state.test.history = [];
    
    document.getElementById('name-input-modal-wrapper').remove();
    startRandomTask();
}

function startRandomTask() {
    const existingModal = document.getElementById('success-modal-wrapper');
    if (existingModal) existingModal.remove();

    if (state.test.history.length >= state.test.maxTests) {
        finishTestSession();
        return;
    }

    const layouts = ['list', 'grid', 'search'];
    const targetLayout = layouts[Math.floor(Math.random() * layouts.length)];
    const targetMovie = ALL_MOVIES[Math.floor(Math.random() * ALL_MOVIES.length)];
    
    state.test.targetLayout = targetLayout;
    state.test.targetMovie = targetMovie;
    state.test.startTime = Date.now();
    state.test.elapsedTime = 0;
    
    state.layout = targetLayout;
    state.searchQuery = ''; 
    state.listExpandedGenre = '科幻'; 
    state.gridFilterGenre = '全部';
    
    renderApp();
    renderTaskBar();
    
    if(state.test.timerInterval) clearInterval(state.test.timerInterval);
    state.test.timerInterval = setInterval(() => {
        state.test.elapsedTime = (Date.now() - state.test.startTime) / 1000;
        const timerDisplay = document.getElementById('task-timer-display');
        if (timerDisplay) {
             timerDisplay.innerText = state.test.elapsedTime.toFixed(1) + 's';
        }
    }, 100);
}

function endTask(success) {
    clearInterval(state.test.timerInterval);
    
    if (success) {
        const record = {
            id: state.test.history.length + 1,
            movie: state.lang === 'zh' ? state.test.targetMovie.title : state.test.targetMovie.titleEn,
            layout: TRANSLATIONS[state.lang].layouts[state.test.targetLayout],
            time: state.test.elapsedTime.toFixed(2)
        };
        state.test.history.push(record);
        
        if (state.test.history.length >= state.test.maxTests) {
            finishTestSession();
        } else {
            showSuccessModal(state.test.elapsedTime.toFixed(2));
        }
    } else {
        state.test.targetMovie = null; 
        renderTaskBar();
    }
}

function finishTestSession() {
    state.test.stage = 'finished';
    state.layout = 'summary'; 
    renderApp();
    renderTaskBar(); 
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
        background: #ef4444; color: white; padding: 10px 20px; border-radius: 8px;
        z-index: 3000; font-weight: bold; box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: fadeInOut 2s ease forwards;
    `;
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
    
    if (!document.getElementById('toast-style')) {
        const style = document.createElement('style');
        style.id = 'toast-style';
        style.innerHTML = `@keyframes fadeInOut { 0% {opacity:0; transform:translate(-50%, -20px)} 10% {opacity:1; transform:translate(-50%, 0)} 80% {opacity:1} 100% {opacity:0} }`;
        document.head.appendChild(style);
    }
}

function showSuccessModal(time) {
    const wrapper = document.createElement('div');
    wrapper.id = 'success-modal-wrapper';
    wrapper.style.cssText = 'position: fixed; inset: 0; z-index: 2000; display: flex; align-items: center; justify-content: center;';
    const t = TRANSLATIONS[state.lang];
    
    wrapper.innerHTML = `
        <div class="modal-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);"></div>
        <div class="success-modal" style="position: relative; background: var(--bg-card); padding: 2rem; border-radius: 1rem; box-shadow: 0 20px 50px rgba(0,0,0,0.3); text-align: center; min-width: 300px; max-width: 90%; margin: 1rem; border: 2px solid var(--test-accent); animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
            <div style="font-size:3rem; margin-bottom:1rem">🎉</div>
            <h2 style="font-size:1.5rem; font-weight:800; color:var(--text-main); margin-bottom:0.5rem">
                ${t.taskCompleted}
            </h2>
            <p style="color:var(--text-sub); margin-bottom:1.5rem">
                ${t.timeTaken}: 
                <span style="color:var(--primary); font-weight:bold; font-size:1.25rem">${time}s</span>
            </p>
            <div style="display:flex; gap:1rem; justify-content:center">
                <button onclick="document.getElementById('success-modal-wrapper').remove(); startRandomTask()" class="btn btn-primary" style="padding:0.75rem 1.5rem">
                    ${t.startNext}
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(wrapper);
}

function renderTaskBar() {
    const container = document.getElementById('task-container');
    const t = TRANSLATIONS[state.lang];
    
    // 空闲状态
    if (state.test.stage === 'idle') {
        container.innerHTML = `
            <div class="task-bar">
                <div style="font-weight:bold; font-size:1.1rem; display:flex; align-items:center; gap:0.5rem">
                    <span style="background:var(--test-accent); color:var(--test-bg); padding:2px 8px; border-radius:4px; font-size:0.75rem">TEST</span>
                    ${t.testMode}
                </div>
                <button onclick="initTestSession()" class="task-btn">
                    ${t.startTest}
                </button>
            </div>
        `;
        return;
    }

    // 测试进行中状态
    if (state.test.stage === 'testing' && state.test.targetMovie) {
        const movieTitle = state.lang === 'zh' ? state.test.targetMovie.title : state.test.targetMovie.titleEn;
        const layoutName = TRANSLATIONS[state.lang].layouts[state.test.targetLayout];
        const progress = `${state.test.history.length + 1} / ${state.test.maxTests}`;

        container.innerHTML = `
            <div class="task-bar" style="background:var(--bg-body); color:var(--text-main); border-top:2px solid var(--primary)">
                <div class="task-info-group">
                    <div>
                        <span class="task-label">${t.taskProgress}</span>
                        <div class="task-value" style="color:var(--text-muted)">${progress}</div>
                    </div>
                    <div style="border-left:1px solid #ddd; padding-left:1.5rem">
                        <span class="task-label">${t.colTarget}</span>
                        <div class="task-value" style="color:var(--primary)">${movieTitle}</div>
                    </div>
                    <div style="border-left:1px solid #ddd; padding-left:1.5rem; display:none; @media(min-width:768px){display:block}">
                        <span class="task-label">${t.colLayout}</span>
                        <div class="task-value" style="color:var(--text-main)">${layoutName}</div>
                    </div>
                </div>
                
                <div style="display:flex; align-items:center; gap:1rem">
                    <div id="task-timer-display" class="task-timer">0.0s</div>
                    <button onclick="endTask(false)" class="task-btn secondary" style="background:#ef4444; color:white">
                        ${t.abortTask}
                    </button>
                </div>
            </div>
        `;
        return;
    }

    if (state.test.stage === 'finished') {
        container.innerHTML = ''; 
        return;
    }
    
    if (state.test.stage === 'testing' && !state.test.targetMovie) {
         container.innerHTML = `
            <div class="task-bar">
                <div style="font-weight:bold; font-size:1.1rem; color:var(--text-muted)">任务已中断 / Task Aborted</div>
                <button onclick="startRandomTask()" class="task-btn">
                    ${t.startTaskBtn}
                </button>
            </div>
        `;
    }
}

function renderHeader() {
    const t = TRANSLATIONS[state.lang];
    const isTesting = state.test.stage === 'testing';
    
    const html = `
        <div class="app-info">
            <div class="app-title">
                <i data-lucide="film"></i> ${t.demoTitle}
            </div>
            <!-- 移动端隐藏描述，节省空间 -->
            <div class="app-desc" style="display:none; @media(min-width:768px){display:block}">${t.demoDesc}</div>
        </div>
        
        <div class="controls">
            <div class="btn-group" style="display:flex; gap: 0.5rem">
                <button onclick="setState('theme', '${state.theme === 'light' ? 'dark' : 'light'}')" class="btn" title="切换主题">
                    <i data-lucide="${state.theme === 'light' ? 'moon' : 'sun'}"></i>
                </button>
                <button onclick="setState('lang', '${state.lang === 'zh' ? 'en' : 'zh'}')" class="btn">
                    <i data-lucide="languages"></i> ${state.lang === 'zh' ? 'EN' : '中文'}
                </button>
            </div>

            <div style="display:flex; background:var(--bg-body); padding:0.25rem; border-radius:var(--radius-md); opacity:${isTesting ? 0.5 : 1}; pointer-events:${isTesting ? 'none' : 'auto'}">
                ${['list', 'grid', 'search'].map(layout => `
                    <button onclick="setState('layout', '${layout}')" class="btn ${state.layout === layout && state.layout !== 'detail' && state.layout !== 'summary' ? 'active' : ''}">
                        <i data-lucide="${layout === 'list' ? 'list' : layout === 'grid' ? 'layout-grid' : 'search'}"></i>
                        <span style="display: none; @media(min-width:768px){ display:inline; }">${t.layouts[layout]}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    document.getElementById('header-container').innerHTML = html;
}

function renderFooter() {
    if (state.layout === 'detail' || state.layout === 'summary') {
        document.getElementById('footer-container').innerHTML = '';
        return;
    }
    const t = TRANSLATIONS[state.lang];
    const html = `
        <div class="card" style="padding: 1rem; font-size: 0.875rem;">
            <div style="font-weight:bold; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem">
                <i data-lucide="list" size="16"></i> ${t.layouts.list}
            </div>
            <p style="color:var(--text-sub)">${t.listDesc.join(' ')}</p>
        </div>
        <div class="card" style="padding: 1rem; font-size: 0.875rem;">
            <div style="font-weight:bold; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem">
                <i data-lucide="layout-grid" size="16"></i> ${t.layouts.grid}
            </div>
            <p style="color:var(--text-sub)">${t.gridDesc.join(' ')}</p>
        </div>
        <div class="card" style="padding: 1rem; font-size: 0.875rem;">
            <div style="font-weight:bold; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem">
                <i data-lucide="search" size="16"></i> ${t.layouts.search}
            </div>
            <p style="color:var(--text-sub)">${t.searchDesc.join(' ')}</p>
        </div>
    `;
    document.getElementById('footer-container').innerHTML = html;
}

function renderContent() {
    const container = document.getElementById('content-container');
    // 重要：使用新的 view-container 类替代硬编码高度
    container.className = 'view-container card'; 
    
    if (state.layout === 'summary') {
        container.innerHTML = generateSummaryLayout();
    } else if (state.layout === 'detail') {
        container.innerHTML = generateDetailLayout();
    } else if (state.layout === 'list') {
        container.innerHTML = generateListLayout();
    } else if (state.layout === 'grid') {
        container.innerHTML = generateGridLayout();
    } else {
        container.innerHTML = generateSearchLayout();
    }
}

// --- 布局生成器：Summary ---
function generateSummaryLayout() {
    const t = TRANSLATIONS[state.lang];
    const history = state.test.history;
    const totalTime = history.reduce((acc, curr) => acc + parseFloat(curr.time), 0).toFixed(2);
    const avgTime = history.length > 0 ? (totalTime / history.length).toFixed(2) : '0.00';
    
    const rows = history.map(row => `
        <tr>
            <td>${row.id}</td>
            <td>${row.movie}</td>
            <td>${row.layout}</td>
            <td style="font-family:monospace; font-weight:bold">${row.time}</td>
        </tr>
    `).join('');

    return `
        <div class="scroll-area" style="padding: 2rem;">
            <div style="text-align:center; margin-bottom:2rem">
                <div style="font-size:3rem; margin-bottom:0.5rem">📊</div>
                <h2 style="font-size:2rem; font-weight:800; margin-bottom:0.5rem">${t.summaryTitle}</h2>
                <div style="color:var(--text-sub)">${t.summaryTester}: <strong>${state.test.testerName}</strong></div>
            </div>

            <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:1rem; margin-bottom:2rem">
                <div class="card" style="padding:1.5rem; text-align:center; background:var(--primary-light); border-color:var(--primary)">
                    <div style="font-size:0.875rem; color:var(--text-sub); margin-bottom:0.5rem">${t.summaryTotal}</div>
                    <div style="font-size:2rem; font-weight:800; color:var(--primary)">${totalTime}s</div>
                </div>
                <div class="card" style="padding:1.5rem; text-align:center; background:var(--accent-orange-bg); border-color:var(--accent-orange)">
                    <div style="font-size:0.875rem; color:var(--text-sub); margin-bottom:0.5rem">${t.summaryAvg}</div>
                    <div style="font-size:2rem; font-weight:800; color:var(--accent-orange)">${avgTime}s</div>
                </div>
            </div>

            <div class="card" style="overflow-x:auto">
                <table class="summary-table" style="min-width: 100%">
                    <thead>
                        <tr>
                            <th>${t.colTask}</th>
                            <th>${t.colTarget}</th>
                            <th>${t.colLayout}</th>
                            <th>${t.colTime}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>

            <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:1rem; margin-top:2rem; padding-bottom: 2rem;">
                <button onclick="exportData()" class="btn btn-primary" style="padding:0.75rem 2rem">
                    <i data-lucide="download"></i> ${t.exportData}
                </button>
                <button onclick="restartTest()" class="btn" style="border:1px solid var(--border)">
                    <i data-lucide="rotate-ccw"></i> ${t.restartTest}
                </button>
            </div>
        </div>
    `;
}

function exportData() {
    const data = {
        tester: state.test.testerName,
        date: new Date().toLocaleString(),
        results: state.test.history
    };
    const json = JSON.stringify(data, null, 2);
    navigator.clipboard.writeText(json).then(() => {
        alert("数据已复制到剪贴板！\nData copied to clipboard!");
    });
    console.log("Exported Data:", data);
}

function restartTest() {
    state.test.stage = 'idle';
    state.test.history = [];
    state.test.testerName = '';
    state.layout = 'list';
    renderApp();
    renderTaskBar();
}

// --- 布局生成器：Detail ---
function generateDetailLayout() {
    const movie = ALL_MOVIES.find(m => m.id === Number(state.selectedMovieId));
    if (!movie) return '<div>Movie not found</div>';
    
    const info = getEnhancedMovieInfo(movie);

    return `
        <div class="detail-view">
            <div class="detail-back-bar">
                <button onclick="closeDetail()" class="btn" style="background:rgba(0,0,0,0.5); color:white; backdrop-filter:blur(4px); border:1px solid rgba(255,255,255,0.2);">
                    <i data-lucide="arrow-left"></i> ${state.lang === 'en' ? 'Back' : '返回'}
                </button>
            </div>
            <div class="detail-hero-section">
                <div class="detail-hero-bg ${movie.posterClass}"></div>
                <div class="detail-content-wrapper">
                    <div class="detail-poster-large">
                        <i data-lucide="film" size="64" class="text-white opacity-50"></i>
                    </div>
                    <h1 style="font-size: 2rem; font-weight: 800; text-shadow: 0 2px 10px rgba(0,0,0,0.5); margin: 0; line-height:1.2;">${info.title}</h1>
                    
                    <div class="detail-meta-tags">
                        <span class="detail-meta-tag">${movie.year}</span>
                        <span class="detail-meta-tag">${info.genre}</span>
                        <span class="detail-meta-tag" style="background:var(--accent-orange); color:white">
                            ★ ${movie.rating}
                        </span>
                    </div>

                    <div class="detail-info-grid">
                        <div class="info-item">
                            <span class="info-label">${state.lang === 'en' ? 'Director' : '导演'}</span>
                            <span class="info-value">${info.director}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">${state.lang === 'en' ? 'Starring' : '主演'}</span>
                            <span class="info-value">${info.cast}</span>
                        </div>
                    </div>

                    <div class="detail-actions">
                        <button class="btn btn-primary" style="padding:0.75rem 2rem; border-radius:99px; font-size:1rem;">
                            <i data-lucide="play" fill="currentColor"></i> ${state.lang === 'en' ? 'Play Now' : '立即播放'}
                        </button>
                        <button class="btn" style="background:rgba(255,255,255,0.2); color:white; border-radius:99px; padding:0.75rem;">
                            <i data-lucide="heart"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="detail-synopsis" style="flex: 1; padding-bottom: 100px;">
                <h3 style="font-size:1.25rem; font-weight:bold; margin-bottom:1rem; border-bottom:1px solid var(--border); padding-bottom:0.5rem">
                    ${state.lang === 'en' ? 'Synopsis' : '剧情简介'}
                </h3>
                <p style="line-height:1.8; color:var(--text-sub); font-size:1.05rem;">
                    ${info.synopsis}
                </p>
            </div>
        </div>
    `;
}

// --- 布局生成器：List ---
function generateListLayout() {
    const t = TRANSLATIONS[state.lang];
    const genres = t.genres;
    
    const filteredMovies = ALL_MOVIES.filter(m => {
        const info = getMovieInfo(m);
        const genreMatch = state.listExpandedGenre === genres[0] || !state.listExpandedGenre || info.genre === state.listExpandedGenre;
        const yearMatch = !state.listSelectedYear || m.year === state.listSelectedYear;
        return genreMatch && yearMatch;
    });

    // 年份子菜单
    let yearsHTML = '';
    if (state.listExpandedGenre) {
        const years = [...new Set(ALL_MOVIES.filter(m => getMovieInfo(m).genre === state.listExpandedGenre).map(m => m.year))].sort((a,b) => b-a);
        yearsHTML = years.map(year => `
            <button onclick="setState('listSelectedYear', '${year}')" class="btn ${state.listSelectedYear == year ? 'active' : ''}" style="font-size:0.8rem; padding:0.25rem 0.5rem; border:1px solid var(--border)">
                ${year}
            </button>
        `).join('');
    }

    const sidebarHTML = genres.filter((_, i) => i !== 0).map(genre => {
        const isExpanded = state.listExpandedGenre === genre;
        return `
            <li>
                <button onclick="setState('listExpandedGenre', '${isExpanded ? '' : genre}'); setState('listSelectedYear', null)" class="nav-item-btn ${isExpanded ? 'active' : ''}">
                    <div class="flex-center gap-sm">
                        <span style="width:6px; height:6px; border-radius:50%; background-color:${isExpanded ? 'var(--primary)' : 'var(--text-muted)'}"></span>
                        ${genre}
                    </div>
                    <i data-lucide="${isExpanded ? 'chevron-down' : 'chevron-right'}" size="14" style="opacity:0.5"></i>
                </button>
                ${isExpanded ? `<div class="sub-nav" style="display:flex; flex-wrap:wrap; gap:0.5rem; padding:0.5rem">${yearsHTML}</div>` : ''}
            </li>
        `;
    }).join('');

    const itemsHTML = filteredMovies.length > 0 ? filteredMovies.map(m => {
        const info = getMovieInfo(m);
        return `
        <div onclick="viewMovie(${m.id})" class="list-item">
            <div class="poster-thumb ${m.posterClass}">
                <i data-lucide="film" size="20"></i>
            </div>
            <div style="flex:1; min-width:0">
                <h3 style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis">${info.title}</h3>
                <div class="item-meta">
                    <span>${m.year}</span> <span style="width:3px;height:3px;background:currentColor;border-radius:50%"></span> <span>${info.director}</span>
                </div>
            </div>
            <div class="rating-badge" style="flex-shrink:0">
                <i data-lucide="star" size="12" fill="currentColor"></i> ${m.rating}
            </div>
        </div>`;
    }).join('') : `<div class="flex-center" style="height:200px; color:var(--text-muted); flex-direction:column"><i data-lucide="film" size="40"></i><p style="margin-top:1rem">${t.noMovies}</p></div>`;

    return `
        <div class="layout-split">
            <aside class="sidebar custom-scrollbar">
                <div class="sidebar-header">${t.navTitle}</div>
                <ul class="nav-list">${sidebarHTML}</ul>
            </aside>
            <div class="content-area scroll-area">
                <div class="section-title">
                    ${state.listExpandedGenre || t.allMovies}
                    ${state.listSelectedYear ? `<span class="tag-badge">${state.listSelectedYear}</span>` : ''}
                </div>
                <div>${itemsHTML}</div>
            </div>
        </div>
    `;
}

// --- 布局生成器：Grid ---
function generateGridLayout() {
    const t = TRANSLATIONS[state.lang];
    const filteredMovies = ALL_MOVIES.filter(m => {
        const info = getMovieInfo(m);
        const isGenreMatch = state.gridFilterGenre === t.genres[0] || info.genre === state.gridFilterGenre;
        const isYearMatch = state.gridFilterYear === 'All' || m.year === state.gridFilterYear;
        return isGenreMatch && isYearMatch;
    });
    
    const years = [...new Set(ALL_MOVIES.map(m => m.year))].sort((a,b) => b-a);
    
    const cardsHTML = filteredMovies.map(m => {
        const info = getMovieInfo(m);
        return `
        <div onclick="viewMovie(${m.id})" class="grid-card">
            <div class="card-poster ${m.posterClass}">
                <div style="position:absolute; top:8px; right:8px; background:rgba(0,0,0,0.6); color:white; padding:2px 6px; border-radius:4px; font-size:10px; font-weight:bold; display:flex; gap:2px; align-items:center;">
                    <i data-lucide="star" size="10" fill="#facc15" color="#facc15"></i> ${m.rating}
                </div>
            </div>
            <div class="card-body">
                <div class="card-title">${info.title}</div>
                <div style="font-size:0.75rem; color:var(--text-sub); margin-bottom:0.5rem">${info.director}</div>
                <div class="card-footer">
                    <span class="tag-badge" style="font-size:10px">${m.year}</span>
                    <span style="font-size:10px">${info.genre}</span>
                </div>
            </div>
        </div>`;
    }).join('');

    return `
        <div style="height: 100%; display:flex; flex-direction:column">
            <div class="filter-bar">
                <div class="flex-center gap-sm" style="font-weight:bold; font-size:0.875rem">
                    <i data-lucide="filter" size="16"></i> <span style="display:none; @media(min-width:640px){display:inline}">${t.filterLabel}</span>
                </div>
                <select onchange="setState('gridFilterGenre', this.value)" class="select-input">
                    ${t.genres.map(g => `<option value="${g}" ${state.gridFilterGenre === g ? 'selected' : ''}>${g}</option>`).join('')}
                </select>
                <select onchange="setState('gridFilterYear', this.value)" class="select-input">
                    <option value="All">${t.allYears}</option>
                    ${years.map(y => `<option value="${y}" ${state.gridFilterYear == y ? 'selected' : ''}>${y}</option>`).join('')}
                </select>
            </div>
            <div class="scroll-area">
                <div class="grid-container">${cardsHTML}</div>
            </div>
        </div>
    `;
}

// --- 布局生成器：Search ---
function getFilteredMovies() {
     const query = state.searchQuery.toLowerCase();
     return !query ? ALL_MOVIES : ALL_MOVIES.filter(m => {
        const info = getMovieInfo(m);
        return info.title.toLowerCase().includes(query) || info.director.toLowerCase().includes(query) || info.genre.toLowerCase().includes(query);
    });
}

function generateMovieItemsHTML(movies) {
     const t = TRANSLATIONS[state.lang];
     if (movies.length === 0) return `<div class="flex-center" style="height:100px; color:var(--text-muted);">${t.noResult}</div>`;
     
     return movies.map(m => {
        const info = getMovieInfo(m);
        return `
        <div onclick="viewMovie(${m.id})" class="list-item" style="border:none; background:transparent; margin-bottom:0; padding:1rem 0;">
            <div class="poster-thumb ${m.posterClass}" style="width:60px; height:80px"></div>
            <div style="flex:1; min-width:0">
                <div class="flex-between">
                    <h3 style="font-size:1.125rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">${info.title}</h3>
                    <div class="rating-badge"><i data-lucide="star" size="10" fill="currentColor"></i> ${m.rating}</div>
                </div>
                <div class="item-meta" style="margin-top:0.25rem">
                    <span class="tag-badge">${m.year}</span>
                    <span>${info.genre} · ${info.director}</span>
                </div>
                <p style="font-size:0.75rem; color:var(--text-muted); margin-top:0.5rem; line-height:1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                    ${state.lang === 'en' ? `Generated description for ${info.title}...` : `这是关于《${info.title}》的自动生成简介...`}
                </p>
            </div>
        </div>`;
    }).join('');
}

function handleSearchInput(value) {
    state.searchQuery = value;
    const resultsContainer = document.getElementById('search-results-list');
    const headerText = document.getElementById('search-header-text');
    const clearBtn = document.getElementById('search-clear-btn');
    const t = TRANSLATIONS[state.lang];
    const filteredMovies = getFilteredMovies();

    if (resultsContainer) {
        resultsContainer.innerHTML = generateMovieItemsHTML(filteredMovies);
        if (window.lucide) lucide.createIcons();
    }
    
    if (headerText) {
        headerText.innerText = state.searchQuery ? `${t.searchResult} (${filteredMovies.length})` : t.recommend;
    }
    
    if (clearBtn) {
        clearBtn.style.display = state.searchQuery ? 'block' : 'none';
    }
}

function generateSearchLayout() {
    const t = TRANSLATIONS[state.lang];
    const filteredMovies = getFilteredMovies();
    const resultsHTML = generateMovieItemsHTML(filteredMovies);

    return `
        <div style="height: 100%; display:flex; flex-direction:column">
            <div class="search-hero">
                <div class="search-title">${t.searchTitle}</div>
                <div class="search-input-wrapper">
                    <input oninput="handleSearchInput(this.value)" value="${state.searchQuery}" type="text" placeholder="${t.searchPlaceholder}" class="search-input">
                    <i data-lucide="search" class="search-icon"></i>
                </div>
                <div class="tags-container">
                    ${t.tags.map(tag => `
                        <button onclick="setState('searchQuery', '${tag.value}')" class="search-tag ${state.searchQuery === tag.value ? 'active' : ''}">
                            ${tag.label}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="scroll-area">
                <div class="container" style="max-width:800px; padding: 1.5rem">
                    <div class="flex-between" style="border-bottom:1px solid var(--border); padding-bottom:0.5rem; margin-bottom:1rem; font-size:0.75rem; font-weight:bold; color:var(--text-muted); text-transform:uppercase">
                        <div id="search-header-text">${state.searchQuery ? `${t.searchResult} (${filteredMovies.length})` : t.recommend}</div>
                        <button id="search-clear-btn" onclick="setState('searchQuery', '')" style="color:var(--primary); display:${state.searchQuery ? 'block' : 'none'}">Clear</button>
                    </div>
                    <div id="search-results-list">${resultsHTML}</div>
                </div>
            </div>
        </div>
    `;
}

init();