package io.renren.modules.generator.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.rose.common.utils.PageUtils;
import com.rose.common.utils.Query;
import io.renren.modules.generator.dao.YanMajorCollegeDao;
import io.renren.modules.generator.entity.YanMajorCollegeEntity;
import io.renren.modules.generator.service.YanMajorCollegeService;
import org.springframework.stereotype.Service;

import java.util.Map;


@Service("yanMajorCollegeService")
public class YanMajorCollegeServiceImpl extends ServiceImpl<YanMajorCollegeDao, YanMajorCollegeEntity> implements YanMajorCollegeService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<YanMajorCollegeEntity> page = this.page(
                new Query<YanMajorCollegeEntity>().getPage(params),
                new QueryWrapper<YanMajorCollegeEntity>()
        );

        return new PageUtils(page);
    }

}