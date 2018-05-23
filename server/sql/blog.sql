/*
 Navicat Premium Data Transfer

 Source Server         : blog
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : 65001

 Date: 23/05/2018 18:14:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for artical
-- ----------------------------
DROP TABLE IF EXISTS `artical`;
CREATE TABLE `artical`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `publishTime` datetime(0) NULL DEFAULT NULL,
  `isPublish` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `createTime` datetime(0) NULL DEFAULT NULL,
  `updateTime` datetime(0) NULL DEFAULT NULL,
  `preview` longtext CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `tags` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of artical
-- ----------------------------
INSERT INTO `artical` VALUES (1, '11111111111111', '1111111111111111111111111111111111111111111', '2018-05-25 14:26:52', 'true', '2018-05-18 14:28:09', '2018-05-18 14:28:13', 'jsdklfjalsdfjlkasdfjlkasdjfklasdjfkasdjklfjsadklfasjdklfjasdklfjasdklfjaskdlfjkalsdfjkl', NULL);
INSERT INTO `artical` VALUES (2, '222222222', '打发手动阀手动阀', '2018-05-10 14:29:10', 'false', '2018-05-24 14:29:20', '2018-05-24 14:29:25', 'dfasdfjkasdlfjasdkfjkljkldfjkalsdjfkl', NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userName` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`userName`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'c4ca4238a0b923820dcc509a6f75849b');

SET FOREIGN_KEY_CHECKS = 1;
