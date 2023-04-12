<template>
    <div id="Personal_Information">
        <div class="个人信息">
            <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                <el-tab-pane label="基本信息" name="基本信息">
                    <el-descriptions
                            :size="size"
                            border
                            class="基本信息"
                            column="3"
                            title="个人信息">
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-user"></i>
                                姓名
                            </template>
                            {{ descriptions.name }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-mobile-phone"></i>
                                性别
                            </template>
                            {{ descriptions.gender }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-location-outline"></i>
                                出生日期
                            </template>
                            {{ descriptions.Date_of_birth }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-tickets"></i>
                                籍贯
                            </template>
                            {{ descriptions.Native_place }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                民族
                            </template>
                            {{ descriptions.nationality }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                国籍/地区
                            </template>
                            {{ descriptions.Nationality_region }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                政治面貌
                            </template>
                            {{ descriptions.Political_status }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                港澳台侨外
                            </template>
                            {{ descriptions.Overseas_Chinese_from_Hong_Kong_Macao_and_aiwan }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                健康状态
                            </template>
                            {{ descriptions.health }}
                        </el-descriptions-item>

                    </el-descriptions>

                    <el-divider content-position="left">个人辅助信息</el-divider>
                    <el-descriptions :column="3" :size="size" border class="margin-top">
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                姓名拼音
                            </template>
                            {{ descriptions.Name_pinyin }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                曾用名
                            </template>
                            {{ descriptions.Former_name }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                户口所在地
                            </template>
                            {{ descriptions.domicile }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                户口性质
                            </template>
                            {{ descriptions.Nature_of_household_registration }}
                        </el-descriptions-item>
                    </el-descriptions>

                    <el-divider content-position="left">个人学籍信息</el-divider>
                    <el-descriptions :column="3" :size="size" border class="margin-top">
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                年级
                            </template>
                            {{ School.grade }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                学制
                            </template>
                            {{ School.educational_system }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                专业
                            </template>
                            {{ School.major }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                院系
                            </template>
                            {{ School.department }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                入校时间
                            </template>
                            {{ School.School_entry_time }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                毕业时间
                            </template>
                            {{ School.Graduation_time }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                所属校区
                            </template>
                            {{ School.Home_campus }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                所属班级
                            </template>
                            {{ School.Belong_to_the_class }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                学籍状态
                            </template>
                            {{ School.School_status }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                教育邮箱
                            </template>
                            {{ School.Education_mailbox }}
                        </el-descriptions-item>
                    </el-descriptions>
                </el-tab-pane>
                <el-tab-pane label="联系信息" name="联系信息">
                    <el-descriptions
                            :size="size"
                            border
                            class="联系信息"
                            column="3"
                            title="联系信息">
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-user"></i>
                                手机号
                            </template>
                            {{ contact.Mobile_phone_number }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-mobile-phone"></i>
                                备用手机号
                            </template>
                            {{ contact.Alternate_phone_number }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-location-outline"></i>
                                紧急联系人
                            </template>
                            {{ contact.Emergency_contacts }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-tickets"></i>
                                电子邮箱
                            </template>
                            {{ contact.E_mail01 }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                电子邮箱
                            </template>
                            {{ contact.E_mail02 }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                电子邮箱
                            </template>
                            {{ contact.E_mail03 }}
                        </el-descriptions-item>

                    </el-descriptions>

                    <el-divider content-position="left">个人即时信息</el-divider>
                    <el-descriptions :column="3" :size="size" border class="margin-top">
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                QQ
                            </template>
                            {{ contact.qq }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                微信
                            </template>
                            {{ contact.Wechat }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-office-building"></i>
                                Twitter
                            </template>
                            {{ contact.Twitter }}
                        </el-descriptions-item>
                    </el-descriptions>
                </el-tab-pane>
                <el-tab-pane label="隐私信息" name="隐私信息">
                    <el-empty description="暂无数据"></el-empty>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name: "Personal_Information",
    data() {
        return {
            activeName: '基本信息',
            descriptions: {
                name: "楊蘇國",
                gender: "男",
                Date_of_birth: "2002年10月17日",
                Native_place: "四川省成都市",
                nationality: "汉族",
                Nationality_region: "中华人民共和国",
                Political_status: "群众",
                Overseas_Chinese_from_Hong_Kong_Macao_and_aiwan: "否",
                health: "健康",
                Name_pinyin: "YangSuGuo",
                Former_name: "无",
                domicile: "四川省成都市双流区",
                Nature_of_household_registration: "城镇"
            },
            School: {
                grade: "2022",
                educational_system: "3",
                major: "移动应用开发",
                department: "信息工程学院",
                School_entry_time: "2022-09-04",
                Graduation_time: "2025-06-30",
                Home_campus: "金堂校区",
                Belong_to_the_class: "移动2208班",
                School_status: "在读",
                Education_mailbox: "2022090301237@cdivtc.edu.cn",
            },
            contact: {
                Mobile_phone_number: "19802898927",
                Alternate_phone_number: "18782165409",
                Emergency_contacts: "135*****485",
                E_mail01: "3130876713@qq.com",
                E_mail02: "19802898927@139.com",
                E_mail03: "ab20021017cd@gmail.com",
                qq: "3130876713",
                Wechat: "YSG5409",
                Twitter: "杨苏国",
            },
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
}
</script>

<style scoped>
.个人信息 {
    opacity: 0.85;
}
</style>