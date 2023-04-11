<template>
    <div id="Account_management">
        <el-tabs v-model="activeName">
            <el-tab-pane label="修改密码" name="修改密码">
                <div class="修改密码">
                    <el-form :model="form" class="修改密码表单" label-position="top" label-width="80px">
                        <el-form-item label="原密码：">
                            <el-input v-model="form.Original_password"
                                      autocomplete="off"
                                      clearable
                                      placeholder="请输入密码"
                                      prefix-icon="el-icon-lock"
                                      show-password
                                      type="password"></el-input>
                        </el-form-item>
                        <el-form-item label="修改密码：">
                            <el-input v-model="form.Change_the_password"
                                      autocomplete="off"
                                      clearable
                                      placeholder="请输入密码"
                                      prefix-icon="el-icon-lock"
                                      show-password
                                      type="password"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码：">
                            <el-input v-model="form.Verify_the_password"
                                      autocomplete="off"
                                      clearable
                                      placeholder="请输入密码"
                                      prefix-icon="el-icon-lock"
                                      show-password
                                      type="password"></el-input>
                        </el-form-item>
                    </el-form>
                    <div>
                        <el-button class="确定" @click="Submit">提交修改</el-button>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="修改头像" name="修改头像">
                <div class="头像容器">
                    <div class="头像容器01">
                        <div class="头像容器02">
                            <el-image :preview-src-list="srcList" :src="src" alt="头像" class="头像"
                                      fit="cover"></el-image>
                            <h1 class="text">自定义头像：</h1>
                        </div>

                        <div>
                            <el-form
                                    ref="ruleForm"
                                    :model="ruleForm"
                                    class="表单"
                                    label-width="100px"
                                    status-icon
                                    style="margin-top: 60px">
                                <el-form-item label="图床链接：" prop="pass">
                                    <el-input
                                            v-model="ruleForm.url"
                                            autocomplete="off"
                                            clearable
                                            placeholder="请输入URL"
                                            prefix-icon="el-icon-user"
                                            style="width: 325px;opacity: 0.3"
                                            type="text"
                                    ></el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="添加子用户" name="添加子用户">添加子用户</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Account_management",
    data() {
        return {
            src: this.$store.state.avatar.img,
            activeName: '修改密码',
            ruleForm: {
                url: ""
            },
            form: {
                Original_password: '',
                Change_the_password: '',
                Verify_the_password: ''
            },
            srcList: [
                'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
            ]
        }
    },
    methods: {
        Submit() {
            //修改操作
            if (this.form.Original_password !== this.$store.state.userinfo.password) {
                this.$alert('原密码不正确', '错误', {confirmButtonText: '确定',})
            } else if (this.form.Change_the_password !== this.form.Verify_the_password) {
                this.$alert('两次密码不一致', '错误', {confirmButtonText: '确定',})
            } else if (
                this.form.Original_password === this.$store.state.userinfo.password &&
                this.form.Change_the_password === this.form.Verify_the_password) {
                axios.get('http://127.0.0.1/user_update', {
                    params: {
                        name: this.$store.state.userinfo.user,
                        password: this.form.Verify_the_password
                    }
                }).then(res => {
                    if (res.data.changedRows > 0) {
                        this.$alert('修改成功', '完成', {confirmButtonText: '确定',})
                    } else {
                        this.$message({
                            message: '修改失败',
                            type: 'error'
                        });
                        console.log(res.data)
                        console.log(this.$store.state.userinfo.user)
                    }
                }).catch(err => {
                    console.log(this.$store.state.userinfo.user)
                    console.log("操作失败" + err);
                })
            }
        },
    }
}


</script>

<style scoped>
#Account_management {
}

.修改密码 {
    background: rgba(114, 125, 146, 0.1);
    border-radius: 20px;
    width: 550px;
    height: 400px;
    margin: 0 auto;
}

.修改密码表单 {
    margin-top: 20px;
    margin-left: 20px;
    width: 500px;
}

.确定 {
    position: relative;
    left: 75%;
}

.头像容器 {
    height: 400px;
}

.头像容器01 {
    display: flex;
}

.头像容器02 {
    height: 170px;
    width: 170px;
}

.头像 {
    /*  width: 100%;
      height: 100%;*/
    border-radius: 20%;
    zoom: 50%;
}

.text {
    width: 170px;
    text-align: center;
    font-size: 28px;
}
</style>