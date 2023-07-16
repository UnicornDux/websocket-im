package io.renren.modules.generator.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.rose.common.utils.PageUtils;
import com.rose.common.utils.Query;
import io.renren.modules.generator.dao.YanQuestionDao;
import io.renren.modules.generator.entity.YanQuestionEntity;
import io.renren.modules.generator.service.YanQuestionService;
import org.springframework.stereotype.Service;

import java.util.Map;


@Service("yanQuestionService")
public class YanQuestionServiceImpl extends ServiceImpl<YanQuestionDao, YanQuestionEntity> implements YanQuestionService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<YanQuestionEntity> page = this.page(
                new Query<YanQuestionEntity>().getPage(params),
                new QueryWrapper<YanQuestionEntity>()
        );

        return new PageUtils(page);
    }

}