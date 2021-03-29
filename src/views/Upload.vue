<template>
    <div class="upload">
        <!--
                <el-upload  ref="upload" action="http://192.168.1.111:8080/minio/upload"
                            :on-success="handleSuccess" :on-remove="handleRemove"
                            list-type="picture-card" :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{file}">
                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                        <span class="el-upload-list__item-actions">
                            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                              <i class="el-icon-zoom-in"></i>
                            </span>
                            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                              <i class="el-icon-download"></i>
                            </span>
                            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                              <i class="el-icon-delete"></i>
                            </span>
                        </span>
                    </div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <el-button style="margin: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        -->

        <el-upload action="http://192.168.1.111:8080/minio/upload" list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-success="handleSuccess"
                   :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>

    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            imgList: [], // 存储上传图片成功后返回的url
        };
    },
    methods: {
        // 上传成功
        handleSuccess(response, file, fileList) {

            // console.log(fileList)


           this.imgList = fileList.map((val) => {
                return val.response.data
            })

            // console.log(this.imgList)

        },
        handleRemove(file, fileList) {

            this.imgList = fileList.map((val) => {
                return val.response.data
            })
            console.log(this.imgList)

        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
    }
}
</script>

<style lang="stylus" scoped>

.upload
    margin: 50px;

</style>
