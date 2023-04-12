<template>
    <div id="Course_information">
        <div class="panel">
            <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                <el-tab-pane label="课表" name="课表">
                    <el-table :cell-style="tableCellStyle" :data="timetable"
                              :header-cell-style="{background:'#d9e5fd', color:'black', fontWeight: 1000}"
                              :span-method="objectSpanMethod"
                              border>
                        <el-table-column align="center" label="时间段" prop="sjd" width="80">
                        </el-table-column>
                        <el-table-column align="center" label="节次" prop="jc" width="80">
                        </el-table-column>
                        <el-table-column align="center" label="星期一" prop="mon">
                            <template slot-scope="scope">
                                <h4>{{ scope.row.mon.title }}</h4>
                                <div v-html="scope.row.mon.content"></div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" label="星期二" prop="tue">
                            <template slot-scope="scope">
                                <h4>{{ scope.row.tue.title }}</h4>
                                <div v-html="scope.row.tue.content"></div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" label="星期三" prop="wed">
                            <template slot-scope="scope">
                                <h4>{{ scope.row.wed.title }}</h4>
                                <div v-html="scope.row.wed.content"></div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" label="星期四" prop="thu">
                            <template slot-scope="scope">
                                <h4>{{ scope.row.thu.title }}</h4>
                                <div v-html="scope.row.thu.content"></div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" label="星期五" prop="fri">
                            <template slot-scope="scope">
                                <h4>{{ scope.row.fri.title }}</h4>
                                <div v-html="scope.row.fri.content"></div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" label="星期六" prop="sat">
                            <template slot-scope="scope">
                                <h4>{{ scope.row.sat.title }}</h4>
                                <div v-html="scope.row.sat.content"></div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" label="星期日" prop="sun">
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
                                        label="学年学期"
                                        prop="semester"
                                        sortable
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        label="课程名称"
                                        prop="Course_name"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        label="课程类别"
                                        prop="Course_category">
                                </el-table-column>
                                <el-table-column
                                        label="学分"
                                        prop="Credits"
                                        sortable>
                                </el-table-column>
                                <el-table-column
                                        label="最终成绩"
                                        prop="grades"
                                        sortable>
                                </el-table-column>
                                <el-table-column
                                        label="绩点"
                                        prop="GPA"
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
                                                label="学年度"
                                                prop="semester"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                                label="学期"
                                                prop="semester2"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                                label="门数"
                                                prop="Number_of_doors"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                                label="总学分"
                                                prop="Total_credits"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                                label="总绩点"
                                                prop="GPA"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                                label="平均绩点"
                                                prop="Grade_point_average"
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

            tableData: [{}],

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
#Course_information {

}
</style>