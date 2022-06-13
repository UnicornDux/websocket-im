package com.rose.yaj.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author rosejava
 * @since 2020-10-12
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class YanMajor implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "pri", type = IdType.AUTO)
    private Integer pri;

    private String id;

    private String code;

    private String name;


}
