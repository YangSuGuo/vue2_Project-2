<template>
    <div id="Course_information">
        <div class="panel">
            <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="课表" name="课表">
                    <el-table :data="timetable" :span-method="objectSpanMethod" border
                              :header-cell-style="{background:'#d9e5fd', color:'black', fontWeight: 1000}"
                              :cell-style="tableCellStyle">
                        <el-table-column prop="sjd" label="时间段" width="80" align="center">
                        </el-table-column>
                        <el-table-column prop="jc" label="节次" width="80" align="center">
                        </el-table-column>
                        <el-table-column prop="mon" label="星期一" align="center">
                            <template slot-scope="scope">
                                <h4>{{ scope.row.mon.title }}</h4>
                                <div v-html="scope.row.mon.content"></div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="tue" label="星期二" align="center">
                            <template slot-scope="scope">
                                <h4>{{ scope.row.tue.title }}</h4>
                                <div v-html="scope.row.tue.content"></div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="wed" label="星期三" align="center">
                            <template slot-scope="scope">
                                <h4>{{ scope.row.wed.title }}</h4>
                                <div v-html="scope.row.wed.content"></div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="thu" label="星期四" align="center">
                            <template slot-scope="scope">
                                <h4>{{ scope.row.thu.title }}</h4>
                                <div v-html="scope.row.thu.content"></div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="fri" label="星期五" align="center">
                            <template slot-scope="scope">
                                <h4>{{ scope.row.fri.title }}</h4>
                                <div v-html="scope.row.fri.content"></div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="sat" label="星期六" align="center">
                            <template slot-scope="scope">
                                <h4>{{ scope.row.sat.title }}</h4>
                                <div v-html="scope.row.sat.content"></div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="sun" label="星期日" align="center">
                            <template slot-scope="scope">
                                <h4>{{ scope.row.sun.title }}</h4>
                                <div v-html="scope.row.sun.content"></div>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="成绩" name="成绩">
                    <div id="table">
                        <div id="成绩">
                            <el-table
                                    :data="tableData"
                                    :default-sort="{prop: 'Credits', order: 'descending'}"
                                    stripe
                                    style="width: 100%">
                                <el-table-column
                                        prop="semester"
                                        label="学年学期"
                                        sortable
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="Course_name"
                                        label="课程名称"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="Course_category"
                                        label="课程类别">
                                </el-table-column>
                                <el-table-column
                                        prop="Credits"
                                        label="学分"
                                        sortable>
                                </el-table-column>
                                <el-table-column
                                        prop="grades"
                                        label="最终成绩"
                                        sortable>
                                </el-table-column>
                                <el-table-column
                                        prop="GPA"
                                        label="绩点"
                                        sortable>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div id="汇总">
                            <!--      <div>-->
                            <!--        <h2 class="title02">汇总</h2>-->
                            <!--      </div>-->
                            <div id="成绩汇总">
                                <el-table
                                        :data="tableDataSummary"
                                        stripe
                                        style="width: 100% ">
                                    <el-table-column label="汇总">
                                        <el-table-column
                                                prop="semester"
                                                label="学年度"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                                prop="semester2"
                                                label="学期"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                                prop="Number_of_doors"
                                                label="门数"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                                prop="Total_credits"
                                                label="总学分"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                                prop="GPA"
                                                label="总绩点"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                                prop="Grade_point_average"
                                                label="平均绩点"
                                        >
                                        </el-table-column>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 下午节次数
        afternoonLength: {
            type: [String, Number],
            default: 4
        },
        // 总节次
        length: {
            type: [String, Number],
            default: 12
        },
        // 课表数据
        events: {
            type: Array,
            default: null
        }
    },
    data() {
        return {
            // 课程表数据
            timetable: [],
            events1: [
                {}
            ],
            hoverOrderArr: [],
            weeks: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],

            activeName: '课表',

            tableData: [{
                semester: '2022-2023 1',
                Course_name: '体育与健康（一）',
                Course_category: '公共必修',
                Credits: '1',
                grades: '80',
                GPA: '3'
            }, {
                semester: '2022-2023 1',
                Course_name: '形势与政策（一）',
                Course_category: '思想政治与心理健康教育模块',
                Credits: '0.17',
                grades: '60',
                GPA: '1'
            }, {
                semester: '2022-2023 1',
                Course_name: '思想道德与法治（一）',
                Course_category: '思想政治与心理健康教育模块',
                Credits: '1.5',
                grades: '84',
                GPA: '3.4'
            }, {
                semester: '2022-2023 1',
                Course_name: '职业发展与规划',
                Course_category: '职业素质模块',
                Credits: '6',
                grades: '83',
                GPA: '3.3'
            }, {
                semester: '2022-2023 1',
                Course_name: '大学美育',
                Course_category: '公共必修',
                Credits: '2',
                grades: '63',
                GPA: '1.3'
            }, {
                semester: '2022-2023 1',
                Course_name: 'Java程序开发',
                Course_category: '基础理论知识模块',
                Credits: '8',
                grades: '85',
                GPA: '3.5'
            }, {
                semester: '2022-2023 1',
                Course_name: '大学生心理健康教育',
                Course_category: '思想政治与心理健康教育模块',
                Credits: '2',
                grades: '94',
                GPA: '4.4'
            }, {
                semester: '2022-2023 1',
                Course_name: '劳动教育（一）',
                Course_category: '劳动教育模块',
                Credits: '0.5',
                grades: '76',
                GPA: '2.6'
            }],

            // 成绩汇总
            tableDataSummary: [
                {
                    semester: "2022-2023",
                    semester2: "1",
                    Number_of_doors: "8",
                    Total_credits: "21.17",
                    GPA: "22.5",
                    Grade_point_average: "3.25"
                }
            ]
        }
    },
    mounted() {
        this.mergeData()
    },
    watch: {
        events: {
            handler() {
                this.mergeData()
            },
            deep: true
        }
    },
    created() {
        this.makeTimetable()
    },
    methods: {
        // 单元格添加背景色
        tableCellStyle(row) {
            if (row.row[row.column.property].title !== undefined) {
                return 'background-color:rgb(24 144 255 / 80%);color: #fff; border-radius:10px'
            }
        },
        // 构造课程表完整数据
        makeTimetable() {
            this.timetable = []
            for (let i = 0; i < this.length; i++) {
                let one = {
                    sjd: '',
                    jc: i + 1,
                    mon: {},
                    tue: {},
                    wed: {},
                    thu: {},
                    fri: {},
                    sat: {},
                    sun: {}
                }
                if (i < 4) {
                    one.sjd = '上午'
                } else if (i > 3 && i < (this.afternoonLength + 4)) {
                    one.sjd = '下午'
                } else {
                    one.sjd = '晚上'
                }
                this.timetable.push(one)
            }
        },
    }
}
</script>

<style scoped>
#Course_information{

}
</style>