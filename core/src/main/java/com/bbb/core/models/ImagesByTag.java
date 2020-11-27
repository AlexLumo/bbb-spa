package com.bbb.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.day.cq.commons.RangeIterator;
import com.day.cq.tagging.TagManager;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import javax.annotation.PostConstruct;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

@Model(
        adaptables = SlingHttpServletRequest.class,
        resourceType = ImagesByTag.RESOURCE_TYPE,
        adapters = {ComponentExporter.class}
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME , extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class ImagesByTag implements ComponentExporter {

    public static final String RESOURCE_TYPE = "bbb/components/imagesbytag";

    private static final String DAM_ROOT = "/content/dam/wkndmuzik";
    private static final String METADATA_NODE = "/jcr:content/metadata";
    private static final String EMPTY = "";

    @ValueMapValue(name="imageTag", injectionStrategy=InjectionStrategy.OPTIONAL)
    protected String[] tags;

    @SlingObject
    private ResourceResolver resourceResolver;

    private final List<String> images = new LinkedList<>();

    @PostConstruct
    protected void init() {
        final TagManager tagManager = resourceResolver.adaptTo(TagManager.class);
        if (Objects.nonNull(tags) && tags.length != 0 && tagManager != null) {
            RangeIterator<Resource> imageIterator = tagManager.find(DAM_ROOT, tags, Boolean.TRUE);
            while (imageIterator.hasNext()) {
                images.add(imageIterator.next().getPath().replace(METADATA_NODE, EMPTY));
            }
        }
    }

    public List<String> getImages() {
        return images;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}