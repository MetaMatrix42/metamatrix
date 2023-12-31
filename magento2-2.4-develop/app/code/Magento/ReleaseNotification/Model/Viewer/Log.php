<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Magento\ReleaseNotification\Model\Viewer;

use Magento\Framework\DataObject;

/**
 * Release notification viewer log resource
 *
 * @deprecated Starting from Magento OS 2.4.7 Magento_ReleaseNotification module is deprecated
 * in favor of another in-product messaging mechanism
 * @see Current in-product messaging mechanism
 */
class Log extends DataObject
{
    /**
     * Get log id
     *
     * @return int
     */
    public function getId()
    {
        return $this->getData('id');
    }

    /**
     * Get viewer id
     *
     * @return int
     */
    public function getViewerId()
    {
        return $this->getData('viewer_id');
    }

    /**
     * Get last viewed product version
     *
     * @return string
     */
    public function getLastViewVersion()
    {
        return $this->getData('last_view_version');
    }
}
